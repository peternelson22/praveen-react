import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const ReusableForm = ({ inputs, onSubmit, onCancel }) => {
  const initialFormData = inputs.reduce((acc, input) => {
    acc[input.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormControl fullWidth margin='normal' key={input.name}>
          <TextField
            label={input.label}
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            value={formData[input.name]}
            onChange={handleChange}
          />
        </FormControl>
      ))}
      <Button onClick={onCancel} color='primary'>
        Cancel
      </Button>
      <Button type='submit' color='primary'>
        Submit
      </Button>
    </form>
  );
};

export default ReusableForm;
