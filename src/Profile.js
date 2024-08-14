import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [companyName, setCompanyName] = useState('');
  const [url, setUrl] = useState('');
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch existing profiles from Django backend
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/profiles/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      alert('Failed to fetch profiles. Please check the console for more details.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProfile = { companyName, url };

    try {
      const response = await fetch('http://localhost:8000/api/profiles/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProfile),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProfiles([...profiles, data]);
      setCompanyName('');
      setUrl('');
    } catch (error) {
      console.error('Error:', error.message);
      alert('Failed to add profile. Please check the console for more details.');
    }
  };

  return (
    <div style={containerStyle}>
      <Link to="/admin-dashboard" style={homeButtonStyle}>Home</Link>
      <h2 style={headingStyle}>Company Profile</h2>
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
          <label style={labelStyle}>URL:</label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>Add Profile</button>
      </form>
      <div style={profilesContainerStyle}>
        {profiles.length > 0 ? (
          profiles.map((profile, index) => (
            <div key={index} style={profileStyle}>
              <p><strong>Company Name:</strong> {profile.companyName}</p>
              <p><strong>URL:</strong> <a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.url}</a></p>
            </div>
          ))
        ) : (
          <p>No profiles available.</p>
        )}
      </div>
    </div>
  );
};

// Styles for the Profile component
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
  backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/861/161/small/light-blue-background-gradient-wall-design-vector.jpg)', // Background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative', // Added to position the Home button
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
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lightly transparent background for form
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
  border: '2px solid #4caf50', // Green border color for inputs
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const profilesContainerStyle = {
  marginTop: '20px',
  width: '100%',
  maxWidth: '600px',
};

const profileStyle = {
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

export default Profile;
