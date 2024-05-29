import { useState } from 'react';
import axios from 'axios';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (url, formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, formData);
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
