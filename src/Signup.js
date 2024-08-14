import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './redux/actions'; // Ensure this path is correct
import './App.css';

const Signup = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email: userEmail, name: userName, password: userPassword };

    try {
      const response = await fetch('http://localhost:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.detail || 'Unknown error'}`);
      }

      const data = await response.json();
      dispatch(addUser(newUser));
      navigate('/Seeker');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/006/998/394/small_2x/blue-abstract-background-blue-background-design-abstract-futuristic-background-free-vector.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '250px',
          textAlign: 'left',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#0e0108', fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '1.2rem',
                color: '#0e0108',
                fontFamily: 'Comic Sans MS, cursive, sans-serif',
              }}
            >
              Email:
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                border: '2px solid #4caf50',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '1.2rem',
                color: '#0e0108',
                fontFamily: 'Comic Sans MS, cursive, sans-serif',
              }}
            >
              Name:
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                border: '2px solid #4caf50',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '1.2rem',
                color: '#0e0108',
                fontFamily: 'Comic Sans MS, cursive, sans-serif',
              }}
            >
              Password:
            </label>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                border: '2px solid #4caf50',
                borderRadius: '8px',
                fontSize: '1rem',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Comic Sans MS, cursive, sans-serif',
              fontSize: '1.2rem',
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
