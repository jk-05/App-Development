// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://t3.ftcdn.net/jpg/08/11/20/32/360_F_811203275_gTauhLPVxcNSGLhkd9EW7vKKqWDAZL5e.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '40px',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '300px',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Welcome</h2>
        <Link to="/admin-password" style={linkStyle}>Admin</Link>
        <Link to="/employer-password" style={linkStyle}>Employer</Link> {/* Updated link */}
        <Link to="/seeker" style={linkStyle}>Seeker</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '10px 0',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

export default Home;
