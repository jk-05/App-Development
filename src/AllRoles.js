import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllRoles = () => {
  const [roles, setRoles] = useState([]);

  
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
  }, []);
  
  const handleDelete = async (id) => {
    console.log('Deleting role with ID:', id); // Add this line to debug
    try {
      const response = await fetch(`http://localhost:8000/api/roles/${id}/`, { // Corrected URL
        method: 'DELETE',
      });
  
      if (response.ok) {
        setRoles(roles.filter(role => role.id !== id));
        alert("Role deleted successfully.");
      } else {
        const errorText = await response.text();
        console.error('Failed to delete role:', errorText);
        alert(`Failed to delete the role: ${errorText}`);
      }
    } catch (error) {
      console.log(id);
      console.error('Error deleting the role:', error);
      alert('Error occurred while deleting the role');
    }
  };
  

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>All Roles</h2>
      <div style={rolesContainerStyle}>
        {roles.map((role) => (
          <div key={role.id} style={roleBoxStyle}>
            {role.imageURL && <img src={role.imageURL} alt={role.role} style={imageStyle} />}
            <p><strong>Role:</strong> {role.role}</p>
            <p><strong>Company Name:</strong> {role.companyName}</p>
            <p><strong>Location:</strong> {role.location}</p>
            <p><strong>Skills:</strong> {role.skills}</p>
            <p><strong>Years of Experience:</strong> {role.experience}</p>
            <p><strong>Salary:</strong> {role.salary}</p>
            <button onClick={() => handleDelete(role.id)} style={deleteButtonStyle}>Delete</button>
          </div>
        ))}
      </div>
      <Link to="/admin-dashboard" style={backButtonStyle}>Back to Home</Link>
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

const headingStyle = {
  color: '#0e0108',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '2rem',
  margin: '0 0 20px 0',
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

const deleteButtonStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '1rem',
  textAlign: 'center',
};

const backButtonStyle = {
  marginTop: '20px',
  textDecoration: 'none',
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
};

export default AllRoles;
