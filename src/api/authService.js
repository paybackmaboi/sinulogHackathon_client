import api from './axiosConfig';

export const loginUser = async (credentials) => {
  try {
    // credentials: { username, password }
    const response = await api.post('/auth/login', credentials);
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const registerUser = async (userData) => {
  try {
    // userData: { username, password, role }
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};