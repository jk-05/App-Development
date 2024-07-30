import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [salary, setSalary] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [roles, setRoles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRole = { role, location, skills, salary, imageURL };

    await fetch('http://localhost:3001/roles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRole),
    });

    setRole('');
    setLocation('');
    setSkills('');
    setSalary('');
    setImageURL('');

    fetchRoles();
  };

  const fetchRoles = async () => {
    const response = await fetch('http://localhost:3001/roles');
    const data = await response.json();
    setRoles(data);
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        <h2>Admin Page</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Role:</label>
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Skills:</label>
            <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Salary:</label>
            <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Image URL:</label>
            <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>Add Role</button>
        </form>
        <div style={rolesContainerStyle}>
          <h3>Added Roles</h3>
          {roles.map((role, index) => (
            <div key={index} style={roleBoxStyle}>
              {role.imageURL && <img src={role.imageURL} alt={role.role} style={imageStyle} />}
              <p><strong>Role:</strong> {role.role}</p>
              <p><strong>Location:</strong> {role.location}</p>
              <p><strong>Skills:</strong> {role.skills}</p>
              <p><strong>Salary:</strong> {role.salary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("/admin_img.png")', 
  // Updated to use the new image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
};

const containerStyle = {
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  marginBottom: '15px',
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
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '1.2rem',
};

const rolesContainerStyle = {
  marginTop: '30px',
};

const roleBoxStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '200px',
  marginBottom: '10px',
  borderRadius: '4px',
};

export default Admin;
