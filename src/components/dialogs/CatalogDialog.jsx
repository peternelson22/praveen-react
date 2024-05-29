import React, { useState } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ReusableForm from './ReusableForm';

const formInputs = [
  {
    name: 'catalog_points',
    label: 'Catalog Points',
    placeholder: 'Enter catalog points',
    type: 'number',
  },
  {
    name: 'seller_user_id',
    label: 'Seller User ID',
    placeholder: 'Enter seller user ID',
    type: 'text',
  },
];

const CatalogDialog = ({ open, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (formData.catalog_points) {
      params.append('catalog_points', formData.catalog_points);
    }
    if (formData.seller_user_id) {
      params.append('seller_user_id', formData.seller_user_id);
    }

    try {
      const response = await axios.post(
        `https://observant-mindfulness-production-02b0.up.railway.app/api/catalog?${params.toString()}`,
        formData
      );
      console.log('Catalog created successfully:', response.data);
      handleClose();
    } catch (err) {
      setError(err.response ? err.response.data : 'An error occurred');
      console.error('Catalog creation failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Fetch Catalog</DialogTitle>
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

export default CatalogDialog;
