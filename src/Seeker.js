import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Seeker = () => {
  const [roles, setRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch roles from db.json
    fetch('http://localhost:3001/roles')
      .then((response) => response.json())
      .then((data) => setRoles(data));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRoles = roles.filter((role) =>
    role.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>Seeker Page</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={searchBarStyle}
        />
      </div>
      <div style={rolesContainerStyle}>
        {filteredRoles.map((role) => (
          <div key={role.id} style={roleBoxStyle}>
            {role.imageURL && <img src={role.imageURL} alt={role.role} style={imageStyle} />}
            <p><strong>Role:</strong> {role.role}</p>
            <p><strong>Location:</strong> {role.location}</p>
            <p><strong>Skills:</strong> {role.skills}</p>
            <p><strong>Salary:</strong> {role.salary}</p>
            <Link to={`/apply/${role.id}`} style={applyButtonStyle}>Apply</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '0px',
  margin: '0',
  minHeight: '100vh',
  backgroundImage: 'url("/photo_seaker.png")',
  backgroundSize:'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const searchBarStyle = {
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginLeft: 'auto',
  width: '200px',
};

const rolesContainerStyle = {
  marginTop: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  width: '100%',
  maxWidth: '1200px',
};

const roleBoxStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '200px',
  marginBottom: '10px',
  borderRadius: '4px',
};

const applyButtonStyle = {
  display: 'block',
  marginTop: '10px',
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  textAlign: 'center',
  textDecoration: 'none',
};

export default Seeker;
