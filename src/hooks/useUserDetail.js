import { useState } from 'react';
import { axiosCustom } from '../axios/axiosAuth';

const useUserDeatil = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosCustom.get(`/user`);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data : 'An error occurred');
      throw err;
    }
  };

  return { getAllUsers, loading, error };
};

export default useUserDeatil;
