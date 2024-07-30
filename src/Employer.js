import React, { useEffect, useState } from 'react';

const Employer = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from db.json
    fetch('http://localhost:3001/applications')
      .then((response) => response.json())
      .then((data) => setApplications(data));
  }, []);

  return (
    <div style={registerContainerStyle}>
      <div style={registerFormStyle}>
        <h2>Employer Page</h2>
        <div style={applicationsContainerStyle}>
          {applications.map((application, index) => (
            <div key={index} style={applicationBoxStyle}>
              <p><strong>Name:</strong> {application.name}</p>
              <p><strong>Education:</strong> {application.education}</p>
              <p><strong>Year of Graduation:</strong> {application.graduationYear}</p>
              <p><strong>Skills:</strong> {application.skills}</p>
              <p><strong>Languages:</strong> {application.languages}</p>
              <p><strong>Native Language:</strong> {application.native}</p>
              <p><strong>CGPA:</strong> {application.cgpa}</p>
              <p><strong>Phone Number:</strong> {application.phoneNumber}</p>
              <button style={emailButtonStyle} onClick={() => window.location.href = `mailto:${application.email}`}>
                Email
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const registerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("https://www.techfunnel.com/wp-content/uploads/2018/12/How-to-Recruit-Potential-Candidates-from-Job-Portals.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
};

const registerFormStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Lightly transparent white background for form
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '400px', // Increased width for wider boxes
  textAlign: 'left',
};

const applicationsContainerStyle = {
  marginTop: '20px',
};

const applicationBoxStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const emailButtonStyle = {
  marginTop: '10px',
  padding: '8px 12px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Employer;
