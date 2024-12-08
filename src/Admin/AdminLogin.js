import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../style/AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Box className="admin-login-page">
      <Box className="admin-login-container">
        <Typography variant="h4" className="admin-login-title">Admin Login</Typography>
        {error && <Typography color="error" className="error-message">{error}</Typography>}
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
          className="admin-login-input"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          className="admin-login-input"
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          className="admin-login-button"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default AdminLogin;
