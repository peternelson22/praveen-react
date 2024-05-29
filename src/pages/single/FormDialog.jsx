// /src/components/FormDialog.js
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const FormDialog = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Form Input</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin='normal'>
          <TextField
            label='First Name'
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            label='Last Name'
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            label='Date of Birth'
            name='dob'
            type='date'
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth margin='normal'>
          <TextField
            label='Gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color='primary'>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
