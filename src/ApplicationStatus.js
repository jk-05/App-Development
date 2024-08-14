import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationStatus = () => {
  const [application, setApplication] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicationData = async () => {
      const applicationId = localStorage.getItem('applicationId');
      if (applicationId) {
        try {
          const response = await fetch(`http://localhost:8000/api/applications/${applicationId}/`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setApplication(data);
        } catch (error) {
          console.error('Error fetching application data:', error);
          setError(error.message);
        }
      } else {
        setError('No application found. Please submit an application first.');
      }
    };

    fetchApplicationData();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Approved':
        return { color: 'green', fontWeight: 'bold' };
      case 'Pending':
        return { color: 'orange', fontWeight: 'bold' };
      case 'Rejected':
        return { color: 'red', fontWeight: 'bold' };
      default:
        return {};
    }
  };

  const handleGoHome = () => {
    navigate('/Home');
  };

  return (
    <div style={containerStyle}>
      <h2>Application Status</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {application ? (
        <div style={applicationDetailsStyle}>
          <p><strong>Name:</strong> {application.name}</p>
          <p><strong>Education:</strong> {application.education}</p>
          <p><strong>Year of Graduation:</strong> {application.graduationYear}</p>
          <p><strong>Skills:</strong> {application.skills}</p>
          <p><strong>Role:</strong> {application.role}</p>
          <p><strong>Company:</strong> {application.company}</p>
          <p><strong>Languages:</strong> {application.languages}</p>
          <p><strong>Native Language:</strong> {application.native}</p>
          <p><strong>CGPA:</strong> {application.cgpa}</p>
          <p><strong>Phone Number:</strong> {application.phoneNumber}</p>
          <p><strong>Status:</strong>
            <span style={getStatusStyle(application.status)}>
              {application.status}
            </span>
          </p>
        </div>
      ) : (
        <p>Loading application data...</p>
      )}
      <div style={buttonContainerStyle}>
        <button onClick={handleGoHome} style={buttonStyle}>Go to Home Page</button>
      </div>
    </div>
  );
};

// Styles remain the same

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '20px',
  boxSizing: 'border-box',
  backgroundImage: 'url(https://png.pngtree.com/background/20210716/original/pngtree-light-blue-cute-striped-baby-blue-background-picture-image_1348681.jpg)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const applicationDetailsStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'left',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default ApplicationStatus;
