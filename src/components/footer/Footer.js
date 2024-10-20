import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="footer-container">
      {/* Register Section */}
      <div className="register-section">
        <h2>Register Now So You Don't Miss Our Programs</h2>
        <div className="email-subscribe-container">
          <div className="email-subscribe">
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>

      {/* Navigation Links and Social Media */}
      <div className="footer-content">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/category">Category</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Monito. All rights reserved.</p>

        {/* Monito Logo in Center */}
        <div className="logo-center">
        <img src="/images/Frame.png" alt="Monito Logo" />
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
