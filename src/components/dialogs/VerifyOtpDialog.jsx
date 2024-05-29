// /src/components/VerifyOtpDialog.js
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import useVerifyOtp from '../../hooks/useVerifyOtp';
import ReusableForm from '../form/ReusableForm';

const VerifyOtpDialog = ({ open, handleClose }) => {
  const { verifyOtp, loading, error } = useVerifyOtp();

  const formInputs = [
    {
      name: 'mobilenumber',
      label: 'Mobile number',
      placeholder: 'Enter your Mobile number',
      type: 'tel',
    },
    { name: 'otp', label: 'OTP', placeholder: 'Enter the OTP', type: 'text' },
  ];

  const handleFormSubmit = async (formData) => {
    try {
      const result = await verifyOtp(formData);
      console.log('OTP Verification successful:', result);
      handleClose();
    } catch (err) {
      console.error('OTP Verification failed:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Verify OTP</DialogTitle>
      <DialogContent>
        <ReusableForm
          inputs={formInputs}
          onSubmit={handleFormSubmit}
          onCancel={handleClose}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VerifyOtpDialog;
