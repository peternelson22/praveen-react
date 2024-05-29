import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from '@mui/material';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://observant-mindfulness-production-02b0.up.railway.app/api/auth/user/signin',
        {
          mobilenumber: mobileNumber,
          password: password,
        }
      );
      localStorage.setItem('token', response.data.token);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.token}`;
      return navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper elevation={6} style={{ padding: '20px', marginTop: '40px' }}>
        <Typography component='h1' variant='h5' align='center'>
          Sign In
        </Typography>
        <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='mobileNumber'
                label='Mobile Number'
                name='mobileNumber'
                autoComplete='mobileNumber'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            style={{ marginTop: '20px' }}
          >
            Sign In
          </Button>
          {error && (
            <Typography
              color='error'
              variant='body2'
              align='center'
              style={{ marginTop: '10px' }}
            >
              {error}
            </Typography>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
