import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  // Check login and admin status when the location changes
  useEffect(() => {
    const user = localStorage.getItem('user');
    try {
      const parsedUser = user ? JSON.parse(user) : null;
      setIsLoggedIn(!!parsedUser?.data); // User is logged in if `user.data` exists
      setIsAdmin(!!parsedUser?.isAdmin); // User is admin if `user.isAdmin` is true
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <nav>
      <ul>
        {/* Hide "Home" if already on the home page */}
        {location.pathname !== '/' && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        <li>
          <Link to="/weight-loss">Weight Loss</Link>
        </li>
        <li>
          <Link to="/burn-fat">Burn Fat</Link>
        </li>
        <li>
          <Link to="/weight-gain">Weight Gain</Link>
        </li>
        {/* Conditional rendering based on login and admin status */}
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            <li>
              <Link to="/payment">Payment</Link> {/* Payment link for logged-in users */}
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'blue',
                  textDecoration: 'underline',
                  padding: '0',
                  fontSize: 'inherit',
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
