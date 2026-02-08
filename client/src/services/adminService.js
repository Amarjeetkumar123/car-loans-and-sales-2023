import api from './api';

export const getAdmins = async () => {
  const response = await api.get('/admin/users');
  return response.data;
};
