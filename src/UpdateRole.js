import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RolesContext } from './RolesContext';

const UpdateRole = () => {
  const { roles, setRoles } = useContext(RolesContext);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/roles/');
        if (!response.ok) {
          throw new Error('Failed to fetch roles');
        }
        const data = await response.json();
        setRoles(data);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, [setRoles]);

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Update Role</h2>
        <Link to="/admin-dashboard" style={homeButtonStyle}>Home</Link>
      </div>
      <div style={rolesContainerStyle}>
        {roles.map((role, index) => (
          <div key={index} style={roleBoxStyle}>
            {role.imageURL && <img src={role.imageURL} alt={role.role} style={imageStyle} />}
            <p><strong>Role:</strong> {role.role}</p>
            <p><strong>Company Name:</strong> {role.companyName}</p>
            <p><strong>Location:</strong> {role.location}</p>
            <p><strong>Skills:</strong> {role.skills}</p>
            <p><strong>Years of Experience:</strong> {role.experience}</p>
            <p><strong>Salary:</strong> {role.salary}</p>
            <Link to={`/admin/edit-role/${role.id}`} style={buttonStyle}>Edit</Link>
          </div>
        ))}
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
  backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/006/861/161/small/light-blue-background-gradient-wall-design-vector.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
};

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '20px',
  position: 'relative',
};

const headingStyle = {
  color: '#0e0108',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '2rem',
  margin: '0',
};

const homeButtonStyle = {
  position: 'absolute',
  right: '20px',
  top: '20px',
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '1rem',
  textDecoration: 'none',
  textAlign: 'center',
};

const rolesContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  width: '100%',
  maxWidth: '1200px',
  boxSizing: 'border-box',
};

const roleBoxStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'auto',
  boxSizing: 'border-box',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '200px',
  marginBottom: '10px',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '1rem',
  alignSelf: 'center',
  marginTop: 'auto',
  textDecoration: 'none',
  textAlign: 'center',
};

export default UpdateRole;
