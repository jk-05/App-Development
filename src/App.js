// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import PasswordPage from './PasswordPage';
import EmployerPasswordPage from './EmployerPasswordPage'; // Import EmployerPasswordPage
import Admin from './Admin';
import Employer from './Employer';
import Seeker from './Seeker';
import Apply from './Apply';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-password" element={<PasswordPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/employer-password" element={<EmployerPasswordPage />} /> {/* Route for EmployerPasswordPage */}
          <Route path="/employer" element={<Employer />} />
          <Route path="/seeker" element={<Seeker />} />
          <Route path="/apply/:id" element={<Apply />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
