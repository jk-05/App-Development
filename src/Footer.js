// Footer.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={footerTextStyle}>
          &copy; 2024 Job Portal. All Rights Reserved.
        </div>
        <div style={iconContainerStyle}>
          <a href="https://www.instagram.com/nivaa_shri_15" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
            <FaLinkedin />
          </a>
          <a href="mailto:someone@example.com" style={iconStyle}>
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '5px 0', 
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
};

const footerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  boxSizing: 'border-box',
};

const iconContainerStyle = {
  display: 'flex',
  gap: '5px', 
  marginTop: '5px', 
};

const iconStyle = {
  color: '#fff',
  fontSize: '1rem', 
  textDecoration: 'none',
};

const footerTextStyle = {
  fontSize: '0.65rem', 
};

export default Footer;
