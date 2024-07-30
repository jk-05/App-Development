// PasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const correctPassword = 'admin123'; // Set your correct password here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate('/admin');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Enter Admin Password</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/021/224/269/small_2x/human-resources-hr-management-recruitment-employment-headhunting-concept-human-resources-to-search-and-select-job-applicants-the-process-of-selecting-people-to-join-the-work-of-hr-photo.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  color: 'white',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginBottom: '10px',
  width: '200px',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default PasswordPage;
