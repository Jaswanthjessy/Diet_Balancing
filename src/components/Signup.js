import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../style/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!password.match(passwordRegex)) {
        setError('Password must have at least 1 uppercase letter, 1 symbol, 1 number, and 8 characters.');
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
    }

    // Proceed with form submission
    try {
        const response = await fetch('https://diet-production-e52e.up.railway.app/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            // Success (201 Created)
            setError('');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            navigate('/login'); // Redirect to login page
        } else {
            // Show specific error messages from the backend
            setError(data.message || 'An error occurred');
        }
    } catch (error) {
        // Handle network or unexpected errors
        setError('An error occurred while registering the user');
    }
};



  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Join the Diet Balancing Community</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(''); // Reset error message on input change
            }}
            required
            placeholder="Enter your username"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(''); // Reset error message on input change
            }}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(''); // Reset error message on input change
              }}
              required
              placeholder="Enter your password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError(''); // Reset error message on input change
              }}
              required
              placeholder="Confirm your password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={!username || !email || !password || !confirmPassword}>
            Create Account
          </button>
        </form>
        <p className="redirect-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
