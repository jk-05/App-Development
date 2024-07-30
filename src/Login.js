// Login.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      navigate('/home');
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
        backgroundImage: "url('https://media.licdn.com/dms/image/D5612AQHmWpsKqCEUgQ/article-cover_image-shrink_600_2000/0/1692110377639?e=2147483647&v=beta&t=61b3z7n63D8ABJOVLQKG4W6iObvwTBn-ZuMabStZugM')",
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
        Don't have an account? <Link to="/signup" style={{ color: '#2f50ba', fontSize: '1.2rem' }}>Sign up</Link>
      </p>
    </div>
  );
};

export default Login;