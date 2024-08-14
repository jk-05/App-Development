import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddEmployee = () => {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the employees from the backend
    axios.get('http://localhost:8000/api/employees/')
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post the employee data to the backend
    axios.post('http://localhost:8000/api/employees/', {
      companyName,
      name,
      password,
    })
    .then(response => {
      setEmployees([...employees, response.data]);
      setCompanyName('');
      setName('');
      setPassword('');
    })
    .catch(error => console.error(error));
  };

  return (
    <div style={containerStyle}>
      <Link to="/admin-dashboard" style={homeButtonStyle}>Home</Link>
      <h2 style={headingStyle}>Add Employee</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Add Employee</button>
      </form>
      <div style={employeesContainerStyle}>
        <h3 style={headingStyle}>Employee List</h3>
        {employees.length > 0 ? (
          employees.map((emp, index) => (
            <div key={index} style={employeeStyle}>
              <p><strong>Company:</strong> {emp.companyName}</p>
              <p><strong>Name:</strong> {emp.name}</p>
              <p><strong>Password:</strong> {emp.password}</p>
            </div>
          ))
        ) : (
          <p>No employees added yet.</p>
        )}
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
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/861/161/small/light-blue-background-gradient-wall-design-vector.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '2rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const inputContainerStyle = {
  marginBottom: '15px',
  width: '100%',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '2px solid #4caf50',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const employeesContainerStyle = {
  marginTop: '20px',
  width: '100%',
  maxWidth: '600px',
};

const employeeStyle = {
  marginBottom: '15px',
  padding: '10px',
  backgroundColor: 'white',
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const homeButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#4caf50',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
};

export default AddEmployee;
