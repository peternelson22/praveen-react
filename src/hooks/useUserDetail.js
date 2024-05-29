// /src/hooks/useSignup.js
import { useState } from 'react';
import axios from 'axios';

const useUserDeatil = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://sparkling-eagerness-production.up.railway.app/api/user`
      );
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
