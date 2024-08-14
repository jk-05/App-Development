import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApplicationCountContext } from './ApplicationCountContext';

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setApplicationCount } = useContext(ApplicationCountContext);

  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [skills, setSkills] = useState('');
  const [languages, setLanguages] = useState('');
  const [native, setNative] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      name,
      education,
      graduationYear,
      skills,
      languages,
      native,
      cgpa,
      phoneNumber,
      role,
      company,
      roleId: id,
      status: 'Pending', // Ensure status is included
    };

    try {
      const response = await axios.post('http://localhost:8000/api/applications/', applicationData);
      localStorage.setItem('applicationId', response.data.id);
      setSubmitted(true);

      // Update application count
      const { data } = await axios.get('http://localhost:8000/api/applications/');
      setApplicationCount(data.length);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  const handleGoBack = () => {
    navigate('/Seeker');
  };

  const handleTrackApplication = () => {
    navigate('/application-status');
  };

  return (
    <div style={containerStyle}>
      {submitted ? (
        <div style={thankYouMessageStyle}>
          <h2>Thank you for applying!</h2>
          <p>Your application has been submitted successfully.</p>
          <button onClick={handleGoBack} style={buttonStyle}>Go Back</button>
          <button onClick={handleTrackApplication} style={buttonStyle}>Track Your Application</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2>Apply for Role</h2>
          <div style={formGroupStyle}>
            <label>Name: *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Education: *</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Year of Graduation: *</label>
            <input
              type="text"
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Skills: *</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Role: *</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Company: *</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Languages: *</label>
            <input
              type="text"
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Native Language: *</label>
            <input
              type="text"
              value={native}
              onChange={(e) => setNative(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>CGPA: *</label>
            <input
              type="text"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label>Phone Number: *</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      )}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvFuYJpT0XPiBwAmZ58OthpTBpNtnuKMFjkiKRD2jxXVgO3eLMQcWf1Mw983oQwQfV6s&usqp=CAU)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  boxSizing: 'border-box',
};

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  marginTop: '10px',
};

const thankYouMessageStyle = {
  textAlign: 'center',
};

export default Apply;
