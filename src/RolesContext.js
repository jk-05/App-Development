import React, { createContext, useState, useEffect } from 'react';

export const RolesContext = createContext();

export const RolesProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/roles/');
        if (response.ok) {
          const data = await response.json();
          setRoles(data);
        } else {
          console.error('Failed to fetch roles');
        }
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  return (
    <RolesContext.Provider value={{ roles, setRoles }}>
      {children}
    </RolesContext.Provider>
  );
};
