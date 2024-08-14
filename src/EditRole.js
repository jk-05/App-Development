import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditRole = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [role, setRole] = useState({
    role: '',
    companyName: '',
    location: '',
    skills: '',
    experience: '',
    salary: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/roles/${id}/`);
        if (response.ok) {
          const data = await response.json();
          setRole(data);
        } else {
          console.error('Failed to fetch role:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching role:', error);
      }
    };

    fetchRole();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRole(prevRole => ({
      ...prevRole,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/roles/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(role),
      });

      if (response.ok) {
        navigate('/admin/update-role');
      } else {
        console.error('Failed to update role:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Edit Role</h2>
      <form onSubmit={handleUpdate} style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Role:</label>
          <input
            type="text"
            name="role"
            value={role.role}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={role.companyName}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Location:</label>
          <input
            type="text"
            name="location"
            value={role.location}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Skills:</label>
          <input
            type="text"
            name="skills"
            value={role.skills}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Years of Experience:</label>
          <input
            type="text"
            name="experience"
            value={role.experience}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Salary:</label>
          <input
            type="text"
            name="salary"
            value={role.salary}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Image URL:</label>
          <input
            type="text"
            name="imageURL"
            value={role.imageURL}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Update Role</button>
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

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lightly transparent white background for form
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px',
  textAlign: 'left',
};

const formGroupStyle = {
  marginBottom: '20px',
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
  width: '100%',
  padding: '12px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontFamily: "'Comic Sans MS', cursive, sans-serif",
  fontSize: '1.2rem',
};

export default EditRole;
