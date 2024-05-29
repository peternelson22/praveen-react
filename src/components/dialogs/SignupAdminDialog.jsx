import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import useSignup from '../../hooks/useSignup';
import ReusableForm from '../form/ReusableForm';

const formInputs = [
  {
    name: 'firstname',
    label: 'First Name',
    placeholder: 'Enter your first name',
    type: 'text',
  },
  {
    name: 'lastname',
    label: 'Last Name',
    placeholder: 'Enter your Last name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
  },
  {
    name: 'mobilenumber',
    label: 'Mobile Number',
    placeholder: 'Enter your phone number',
    type: 'tel',
  },
  {
    name: 'countrycode',
    label: 'Country code',
    placeholder: 'Enter your country code',
    type: 'tel',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
];
const SignupAdminDialog = ({ open, handleClose }) => {
  const { signup, loading, error } = useSignup();

  const handleFormSubmit = async (formData) => {
    try {
      const result = await signup(
        `https://observant-mindfulness-production-02b0.up.railway.app/api/auth/admin/signup`,
        formData
      );
      console.log('Signup successful:', result);
      handleClose();
    } catch (err) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Signup</DialogTitle>
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

export default SignupAdminDialog;
