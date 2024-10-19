import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Register Section */}
      <div className="register-section">
        <h2>Register Now So You Don't Miss Our Programs</h2>
        <div className="email-subscribe">
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe Now</button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Category</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Monito. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="footer-links">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
