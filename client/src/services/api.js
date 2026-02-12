import axios from 'axios';
import { API_BASE_URL } from '../constants/config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
let isRefreshing = false;
let refreshQueue = [];

const processQueue = (error, token) => {
  refreshQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
  refreshQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status !== 401 || originalRequest?._retry) {
      return Promise.reject(error);
    }

    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      window.location.href = '/admin/login';
      return Promise.reject(error);
    }

    if (isRefreshing) {
      try {
        const newToken = await new Promise((resolve, reject) => {
          refreshQueue.push({ resolve, reject });
        });
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const response = await refreshClient.post('/auth/refresh', { refreshToken });
      const newToken = response.data?.token;
      const newRefreshToken = response.data?.refreshToken;

      if (newToken) {
        localStorage.setItem('token', newToken);
      }
      if (newRefreshToken) {
        localStorage.setItem('refreshToken', newRefreshToken);
      }

      processQueue(null, newToken);
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('admin');
      window.location.href = '/admin/login';
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;
