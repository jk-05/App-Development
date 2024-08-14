import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
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

  return (
    <div style={containerStyle}>
      <Link to="/seeker" style={backButtonStyle}>Back</Link>

      <h2>Company Profiles</h2>
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

// Styles for the Company component
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
  backgroundImage: 'url(https://i.pinimg.com/474x/0d/74/2b/0d742b0a87a3dd8c980f965c01305986.jpg)', // Updated background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative', // Required for positioning the Back button
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

const backButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px 15px', // Increased padding for a larger button
  backgroundColor: '#4caf50',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '1rem', // Increased font size
  textAlign: 'center',
  fontWeight: 'bold', // Optional: Make text bold for better visibility
};

export default Company;
