import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const generateRandomCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  };

  const initializeCaptcha = () => {
    setGeneratedCaptcha(generateRandomCaptcha());
  };

  useEffect(() => {
    initializeCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // CAPTCHA validation
    if (captcha !== generatedCaptcha) {
      setError('Incorrect CAPTCHA. Please try again.');
      setCaptcha('');
      initializeCaptcha();
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save user details in localStorage
        const isAdmin = data.role === 'admin'; // Assuming 'role' determines if the user is an admin
        localStorage.setItem('user', JSON.stringify({ data: data.userId, isAdmin }));

        // Redirect to Homepage
        navigate('/');
      } else {
        // Handle backend errors
        setError(data.message || 'Invalid email or password');
      }
    } catch (error) {
      // Handle network or unexpected errors
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          <label htmlFor="captcha">CAPTCHA: {generatedCaptcha}</label>
          <input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
            placeholder="Enter the CAPTCHA above"
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>
        </form>
        <p className="redirect-link">
          Don't have an account? <a href="/signup">Signup here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;