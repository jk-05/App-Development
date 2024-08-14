import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (name && password) {
      const validateAdmin = async () => {
        try {
          const response = await fetch('http://localhost:3001/admin');
          const adminData = await response.json();

          const isValidAdmin = adminData.some(
            (admin) => admin.name === name && admin.password === password
          );

          if (isValidAdmin) {
            navigate('/admin-dashboard');
          } else {
            setErrorMessage('Invalid name or password');
          }
        } catch (error) {
          console.error('Error fetching admin data:', error);
          setErrorMessage('Error logging in. Please try again.');
        }
      };

      validateAdmin();
    }
  }, [name, password, navigate]);

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={titleStyle}>Admin Login</h2>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessage('');
            }}
            style={inputStyle}
            placeholder="Enter name"
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage('');
            }}
            style={inputStyle}
            placeholder="Enter password"
            required
          />
        </div>
        {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/006/998/394/small_2x/blue-abstract-background-blue-background-design-abstract-futuristic-background-free-vector.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
};

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '300px',
  textAlign: 'left',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const titleStyle = {
  textAlign: 'center',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '1.2rem',
  color: '#0e0108',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  border: '2px solid #4caf50',
  borderRadius: '8px',
  fontSize: '1rem',
};

const errorStyle = {
  color: 'red',
  textAlign: 'center',
  fontSize: '1rem',
  marginTop: '10px',
};

export default AdminLogin;
