// /src/hooks/useVerifyOtp.js
import { useState } from 'react';
import axios from 'axios';

const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyOtp = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://sparkling-eagerness-production.up.railway.app/api/auth/user/verify-mobile-otp',
        formData
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data : 'An error occurred');
      throw err;
    }
  };

  return { verifyOtp, loading, error };
};

export default useVerifyOtp;
