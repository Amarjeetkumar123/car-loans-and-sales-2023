import api from './api';

// Login admin
export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

// Get current admin
export const getMe = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

// Register new admin (protected)
export const registerAdmin = async (adminData) => {
  const response = await api.post('/auth/register', adminData);
  return response.data;
};

export const changePassword = async (payload) => {
  const response = await api.patch('/auth/password', payload);
  return response.data;
};
