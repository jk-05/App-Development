import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ApplicationCountProvider } from './ApplicationCountContext';

// Import components
import Home from './Home'; // This is correct
import Login from './Login'; // Ensure this is the Login component
import Signup from './Signup';
import Admin from './Admin';
import Employer from './Employer';
import Seeker from './Seeker';
import Apply from './Apply';
import ApplicationStatus from './ApplicationStatus';
import Footer from './Footer';
import AdminLogin from './AdminLogin';
import EmployerLogin from './EmployerLogin';
import AdminDashboard from './AdminDashboard';
import UpdateRole from './UpdateRole';
import EditRole from './EditRole';
import AllRoles from './AllRoles';
import AdminPanel from './AdminPanel';
import Profile from './Profile';
import Company from './Company'; // Import the new Company component
import AddEmployee from './AddEmployee'; // Import the new AddEmployee component

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationCountProvider>
        <Router>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/employer" element={<Employer />} />
              <Route path="/seeker" element={<Seeker />} />
              <Route path="/apply/:id" element={<Apply />} />
              <Route path="/application-status" element={<ApplicationStatus />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/employer-login" element={<EmployerLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/add-role" element={<Admin />} />
              <Route path="/admin/update-role" element={<UpdateRole />} />
              <Route path="/admin/edit-role/:id" element={<EditRole />} />
              <Route path="/admin/delete-role" element={<AllRoles />} />
              <Route path="/admin/dashboard" element={<AdminPanel />} />
              <Route path="/admin/profile" element={<Profile />} />
              <Route path="/company" element={<Company />} />
              <Route path="/admin/add-employee" element={<AddEmployee />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ApplicationCountProvider>
    </Provider>
  );
};

export default App;
