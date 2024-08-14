import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <Link to="/Home" style={homeButtonStyle}>Home</Link>
      </div>
      <div style={boxStyle}>
        <h2>Admin Dashboard</h2>
        <div style={linkContainerStyle}>
          <Link to="/admin/add-role" style={linkStyle}>Add Role</Link>
          <Link to="/admin/update-role" style={linkStyle}>Update Role</Link>
          <Link to="/admin/delete-role" style={linkStyle}>Delete Role</Link>
          <Link to="/admin/dashboard" style={linkStyle}>Dashboard</Link>
          <Link to="/admin/profile" style={linkStyle}>Profile</Link>
          <Link to="/admin/add-employee" style={linkStyle}>Add Employee</Link> {/* New Add Employee Button */}
        </div>
      </div>
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
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  position: 'absolute',
  top: '20px',
  right: '20px',
};

const boxStyle = {
  backgroundColor: 'transparent',
  padding: '20px',
  border: '1px solid white',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '600px',
  textAlign: 'center',
};

const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linkStyle = {
  margin: '10px 0',
  padding: '10px 20px',
  textDecoration: 'none',
  backgroundColor: '#4caf50',
  color: 'white',
  borderRadius: '8px',
};

const homeButtonStyle = {
  padding: '10px 20px',
  textDecoration: 'none',
  backgroundColor: '#4caf50',
  color: 'white',
  borderRadius: '8px',
};

export default AdminDashboard;
