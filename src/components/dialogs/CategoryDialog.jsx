import React, { useState } from 'react';
import axios from '../../utils/axiosConfig';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ReusableForm from '../form/ReusableForm';

const formInputs = [
  {
    name: 'name',
    label: 'Name of category',
    placeholder: 'grocery',
    type: 'text',
  },
  {
    name: 'icon',
    label: 'Icon',
    placeholder: 'Enter your Icon Url',
    type: 'text',
  },
];

const CategoryDialog = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://observant-mindfulness-production-02b0.up.railway.app/api/category',
        formData
      );
      console.log('Category added successfully:', response.data);
      handleClose();
    } catch (err) {
      setError(err.response ? err.response.data : 'An error occurred');
      console.error('Category addition failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <ReusableForm
          inputs={formInputs}
          onSubmit={handleFormSubmit}
          onCancel={handleClose}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message || 'An error occurred'}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDialog;
