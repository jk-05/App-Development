import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RolesContext } from './RolesContext';

const Admin = () => {
  const [role, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [imageURL, setImageURL] = useState('');
  const { roles, setRoles } = useContext(RolesContext);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/roles/');
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRole = { role, companyName, location, skills, experience, salary, imageURL };
    try {
      const response = await fetch('http://localhost:8000/api/roles/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRole),
      });
      if (response.ok) {
        const addedRole = await response.json();
        setRoles(prevRoles => [...prevRoles, addedRole]);
        // Clear form fields
        setRole('');
        setCompanyName('');
        setLocation('');
        setSkills('');
        setExperience('');
        setSalary('');
        setImageURL('');
      }
    } catch (error) {
      console.error('Error adding role:', error);
    }
  };

  return (
    <div style={outerContainerStyle}>
      <Link to="/admin-dashboard">
        <img
          src="https://cdn-icons-png.flaticon.com/512/16/16304.png"
          alt="Logo"
          style={logoStyle}
        />
      </Link>
      <div style={containerStyle}>
        <h2>Admin Page</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Role:</label>
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Company Name:</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required style={inputStyle} />
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
            <label style={labelStyle}>Years of Experience:</label>
            <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} required style={inputStyle} />
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
              <p><strong>Company Name:</strong> {role.companyName}</p>
              <p><strong>Location:</strong> {role.location}</p>
              <p><strong>Skills:</strong> {role.skills}</p>
              <p><strong>Years of Experience:</strong> {role.experience}</p>
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
  backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/006/861/161/small/light-blue-background-gradient-wall-design-vector.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  position: 'relative',
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

const logoStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
};

export default Admin;