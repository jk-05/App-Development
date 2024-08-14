// ApplicationCountContext.js
import React, { createContext, useState } from 'react';

export const ApplicationCountContext = createContext();

export const ApplicationCountProvider = ({ children }) => {
  const [applicationCount, setApplicationCount] = useState(0);

  return (
    <ApplicationCountContext.Provider value={{ applicationCount, setApplicationCount }}>
      {children}
    </ApplicationCountContext.Provider>
  );
};
