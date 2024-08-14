import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RolesProvider } from './RolesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RolesProvider>
      <App />
    </RolesProvider>
  </React.StrictMode>
);
