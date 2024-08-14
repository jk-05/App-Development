import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Employer = () => {
  const [applications, setApplications] = useState([]);
  const loggedInCompany = localStorage.getItem('loggedInCompany');

  useEffect(() => {
    fetch('http://localhost:8000/api/applications/')
      .then((response) => response.json())
      .then((data) => {
        const filteredApplications = data.filter(
          (application) => application.company === loggedInCompany
        );
        setApplications(filteredApplications);
      })
      .catch((error) => console.error('Error fetching applications:', error));
  }, [loggedInCompany]);

  const updateApplicationStatus = async (applicationId, status) => {
    try {
      const response = await fetch(`http://localhost:8000/api/applications/${applicationId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update application status');
      }

      const updatedApplications = applications.map((application) =>
        application.id === applicationId
          ? { ...application, status }
          : application
      );
      setApplications(updatedApplications);
    } catch (error) {
      console.error('Error updating application status:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <Link to="/home" style={homeButtonStyle}>Home</Link>
      <h1 style={titleStyle}>Applications</h1>
      {applications.length > 0 ? (
        <ul style={listStyle}>
          {applications.map((application) => (
            <li key={application.id} style={listItemStyle}>
              <h2>{application.name}</h2>
              <p>Education: {application.education}</p>
              <p>Graduation Year: {application.graduationYear}</p>
              <p>Skills: {application.skills}</p>
              <p>Languages: {application.languages}</p>
              <p>Native Language: {application.native}</p>
              <p>CGPA: {application.cgpa}</p>
              <p>Phone Number: {application.phoneNumber}</p>
              <p>Status: {application.status}</p>
              <button onClick={() => updateApplicationStatus(application.id, 'Approved')} style={buttonStyle}>Approve</button>
              <button onClick={() => updateApplicationStatus(application.id, 'Rejected')} style={buttonStyle}>Reject</button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={messageStyle}>No applications found.</p>
      )}
    </div>
  );
};

// Define the styles here
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/788/478/desktop-wallpaper-sky-blue-solid-blue-background-blue-texture-background-light-blue-background-pastel-blue-solid.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  position: 'relative',
};

const homeButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
};

const titleStyle = {
  textAlign: 'center',
  color: '#333',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const listItemStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',  // Lightly transparent white background for list items
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '50px',  // Further increased padding for larger box size
  marginBottom: '10px',
  width: '100%',  // Keep the list items full width
  maxWidth: '900px',  // Increased maximum width for the list items
};

const buttonStyle = {
  margin: '5px',
  padding: '5px 10px',  // Reduced padding for smaller buttons
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const messageStyle = {
  textAlign: 'center',
  color: '#666',
};

export default Employer;
