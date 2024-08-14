import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from './redux/actions';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/login/', {  // Django API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      navigate('/Seeker');
    } else {
      setError('Invalid email or password');
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
        width: '100%',
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/006/998/394/small_2x/blue-abstract-background-blue-background-design-abstract-futuristic-background-free-vector.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <h2 style={{ color: '#fff', marginBottom: '20px', fontFamily: 'Comic Sans MS, cursive, sans-serif', fontSize: '2rem' }}>
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          width: '230px',
          textAlign: 'left',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label
            style={{ display: 'block', marginBottom: '8px', color: '#0e0108', fontFamily: 'Comic Sans MS, cursive, sans-serif', fontSize: '1.2rem' }}
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
              border: '2px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            style={{ display: 'block', marginBottom: '8px', color: '#0e0108', fontFamily: 'Comic Sans MS, cursive, sans-serif', fontSize: '1.2rem' }}
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
              border: '2px solid #ccc',
              borderRadius: '8px',
              fontSize: '1rem',
            }}
          />
        </div>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'Comic Sans MS, cursive, sans-serif',
            fontSize: '1.2rem',
          }}
        >
          Login
        </button>
      </form>
      <p style={{ color: '#b72527', marginTop: '40px', fontFamily: 'Comic Sans MS, cursive, sans-serif', fontSize: '1.2rem' }}>
        Don't have an account? <Link to="/signup" style={{ color: 'black', fontSize: '1.2rem' }}>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
