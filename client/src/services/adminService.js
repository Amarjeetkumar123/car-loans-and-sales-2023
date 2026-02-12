import api from './api';

export const getAdmins = async (params = {}) => {
  const response = await api.get('/admin/users', { params });
  return response.data;
};

export const createAdmin = async (payload) => {
  const response = await api.post('/admin/users', payload);
  return response.data;
};
