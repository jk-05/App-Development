// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, name, password };

    // Make a POST request to add the new user to db.json
    await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: "url('https://www.asarampublicschool.com/images/job.jpg')",
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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