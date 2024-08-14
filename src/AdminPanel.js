import React, { useContext, useEffect } from 'react';
import { RolesContext } from './RolesContext';
import { ApplicationCountContext } from './ApplicationCountContext';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const { roles } = useContext(RolesContext);
  const { applicationCount, setApplicationCount } = useContext(ApplicationCountContext);
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    fetch('http://localhost:3001/applications')
      .then(response => response.json())
      .then(data => {
        setApplicationCount(data.length);
      });
  }, [setApplicationCount]);

  const handleLogoClick = () => {
    navigate('/admin-dashboard'); // Redirect to the admin dashboard
  };

  return (
    <div style={containerStyle}>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/16/16304.png" 
        alt="Logo" 
        style={logoStyle} 
        onClick={handleLogoClick} // Add click handler to logo
      />
      <h1 style={headingStyle}>Admin Panel</h1>
      <div style={rolesSectionStyle}>
        <h2 style={subHeadingStyle}>Roles</h2>
        <div style={boxStyle}>
          <p style={countStyle}>{roles.length}</p>
        </div>
      </div>
      <div style={appSectionStyle}>
        <h2 style={sub2HeadingStyle}>Applications</h2>
        <div style={appStyle}>
          <p style={countStyle}>{applicationCount}</p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/006/861/161/small/light-blue-background-gradient-wall-design-vector.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  position: 'relative', // Added to position the logo absolutely
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '2.5rem',
  color: 'black', // Adjusted color for better visibility
};

const logoStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '50px', // Adjust the size of the logo
  height: '50px',
  cursor: 'pointer', // Change cursor to pointer for better UX
};

const rolesSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px', // Set a max width for the section
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lightly transparent white background for the section
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  marginBottom: '40px', // Add space below the roles section
};

const appSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '800px', // Set a max width for the section
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lightly transparent white background for the section
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  marginBottom: '40px',
};

const subHeadingStyle = {
  marginBottom: '20px',
  fontSize: '1.5rem',
  color: '#333', // Adjusted color for better visibility
};

const sub2HeadingStyle = {
  marginBottom: '20px',
  fontSize: '1.5rem',
  color: '#333', // Adjusted color for better visibility
};

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '250px', // Adjusted width
  height: '100px', // Adjusted height
  backgroundColor: '#ffffff',
  border: '1px solid #cccccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  padding: '10px',
  margin: '10px 0', // Adjusted margin for better centering
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '250px', // Adjusted width
  height: '100px', // Adjusted height
  backgroundColor: '#ffffff',
  border: '1px solid #cccccc',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  padding: '10px',
  margin: '10px 0', // Adjusted margin for better centering
};

const countStyle = {
  fontSize: '2rem', // Increased font size for the number
  margin: '0', // Remove default margin
  color: '#333', // Adjusted color for better visibility
};

export default AdminPanel;
