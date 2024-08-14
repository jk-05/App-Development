import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Assuming you have some basic styles here

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://cdn-icons-png.freepik.com/256/13011/13011916.png?ga=GA1.1.1603175031.1723179343&semt=ais_hybrid" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          <h1 style={{ color: '#fff', margin: 0 }}>FoundIt</h1>
        </div>
        <ul className="nav-list" style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, gap: '20px' }}>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => handleNavigation('/login')}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => handleNavigation('/signup')}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Sign Up
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => handleNavigation('/admin-login')}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Admin
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={() => handleNavigation('/employer-login')}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Employer
            </button>
          </li>
        </ul>
      </nav>

      <div className="main-content" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/vacancy-interview-illustration-set_169479-1490.jpg?w=1380)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#000' }}>Find Job, Employment, and Career Opportunities</h2>
        <p style={{ fontSize: '1.5rem', color: '#000' }}>The Easiest Way to Find New Jobs</p>
      </div>

      <div className="about-us-container" style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>About Us</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
          At FoundIt, we believe in bridging the gap between job seekers and employers with ease and efficiency. Our mission is to create a platform where talent meets opportunity, simplifying the job search and recruitment process for everyone involved.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto' }}>
          Whether you're searching for your dream job or looking to hire top talent, FoundIt offers a seamless and user-friendly experience. We provide a wide range of job listings, career resources, and tools to help you navigate the complex world of employment.
        </p>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto' }}>
          For employers, we offer robust solutions to post job openings, manage applications, and connect with qualified candidates. For job seekers, our platform is designed to help you find jobs that match your skills and aspirations, making the process of landing the perfect job faster and more effective.
        </p>
      </div>

      

      <div className="who-choose-us-section" style={{ 
        padding: '40px 20px', 
        textAlign: 'center', 
        minHeight: '50vh',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9' // Set a background color or use other styles as needed
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Why Choose Us?</h3>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          FoundIt is trusted by thousands of job seekers and employers worldwide. Our platform is designed to offer the best features, including:
        </p>
        <ul style={{ fontSize: '1.2rem', listStyleType: 'disc', paddingLeft: '40px', textAlign: 'left' }}>
          <li>Extensive job listings</li>
          <li>Easy-to-use interface</li>
          <li>Advanced filtering options</li>
          <li>Reliable application tracking</li>
          <li>Dedicated support to assist you</li>
          <li>Secure and confidential handling</li>
        </ul>
        
      </div>

      {/* Top Companies Section */}
      <div className="top-companies-section" style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '20px 0' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Top Companies</h3>
        <div className="company-logos" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {/* First Row - Three Boxes */}
          <div className="company-logo-box" style={{ flex: '0 0 calc(33.333% - 20px)', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="https://upload.wikimedia.org/wikinews/en/archive/0/0c/20050605155508%21Google_logo_png.png" alt="Company 1" style={{ maxHeight: '100px', maxWidth: '100%' }} />
          </div>
          <div className="company-logo-box" style={{ flex: '0 0 calc(33.333% - 20px)', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="https://www.freepnglogos.com/uploads/microsoft-logo-png-hd-6.png" alt="Company 2" style={{ maxHeight: '100px', maxWidth: '100%' }} />
          </div>
          <div className="company-logo-box" style={{ flex: '0 0 calc(33.333% - 20px)', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFytsu6DHHTgV_0lg8KM7dKnxuGyo_ETl4Fg&s" alt="Company 3" style={{ maxHeight: '100px', maxWidth: '100%' }} />
          </div>

          {/* Second Row - Two Boxes */}
          <div className="company-logo-box" style={{ flex: '0 0 calc(50% - 20px)', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUIPKYyIlvlXkrrTD95oZGzI0pL2YUWjqbg&s" alt="Company 4" style={{ maxHeight: '100px', maxWidth: '100%' }} />
          </div>
          <div className="company-logo-box" style={{ flex: '0 0 calc(50% - 20px)', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsjzLTc8Be4phy9zJvI1FohUqRjmFXawf5w&s" alt="Company 5" style={{ maxHeight: '100px', maxWidth: '100%' }} />
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-section" style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#000', borderRadius: '8px', margin: '20px 0' }}>
  <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>Contact Us</h3>
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    {/* Phone Number Box 1 */}
    <div className="contact-box" style={{ flex: '1', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" style={{ height: '30px', marginRight: '10px' }} />
      <span style={{ fontSize: '1.2rem' }}>+1 (123) 456-7890</span>
    </div>
    {/* Email Box */}
    <div className="contact-box" style={{ flex: '1', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Icon" style={{ height: '30px', marginRight: '10px' }} />
      <span style={{ fontSize: '1.2rem' }}>foundit@gmail.com</span>
    </div>
    {/* Phone Number Box 2 */}
    <div className="contact-box" style={{ flex: '1', backgroundColor: '#fff', borderRadius: '8px', padding: '20px', display: 'flex', alignItems: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" style={{ height: '30px', marginRight: '10px' }} />
      <span style={{ fontSize: '1.2rem' }}>+1 (987) 654-3210</span>
    </div>
  </div>
</div>
</div>

  );
};

export default Home;
