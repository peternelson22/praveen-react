import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

export const useAPI = async (url) => {
  try {
    const response = await axios.get(`${API_URL}/${url}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
