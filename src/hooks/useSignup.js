import { useState } from 'react';
import { axiosCustom } from '../axios/axiosAuth';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (url, formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosCustom.post(url, formData);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data : 'An error occurred');
      throw err;
    }
  };

  return { signup, loading, error };
};

export default useSignup;
