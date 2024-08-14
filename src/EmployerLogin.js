import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployerLogin = () => {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of companies (employees) from the backend
    axios.get('http://localhost:8000/api/employees/')
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the company with the matching name and password
    const company = companies.find(
      (company) => company.companyName === companyName && company.name === name && company.password === password
    );

    if (company) {
      // Store the logged-in company's name in localStorage
      localStorage.setItem('loggedInCompany', company.companyName);

      // Redirect to the employer dashboard
      navigate('/employer');
    } else {
      // Show an error message
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={titleStyle}>Employer Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Company Name</label>
            <select
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              style={inputStyle}
              required
            >
              <option value="">Select your company</option>
              {companies.map((company, index) => (
                <option key={index} value={company.companyName}>
                  {company.companyName}
                </option>
              ))}
            </select>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              placeholder="Enter your name"
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Login</button>
          {error && <p style={errorStyle}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

// Inline styles
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

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  width: '100%',
};

const errorStyle = {
  color: 'red',
  marginTop: '10px',
};

export default EmployerLogin;
