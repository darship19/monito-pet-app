import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Monito Logo" />
      </div>

        {/* Navigation Links */}
        <div className="navbar-links">
        <Link to="/">Home</Link> {/* Updated to Link */}
        <Link to="/category">Category</Link> {/* Updated to Link */}
        <Link to="/about">About</Link> {/* You can add routes for these later */}
        <Link to="/contact">Contact</Link> {/* Updated to Link */}
      </div>


      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search something here!" />
        <i className="fas fa-search"></i>
      </div>

      {/* Join Button */}
      <button className="join-btn">Join the community</button>

      {/* Currency Selector */}
      <div className="currency-selector">
        <span className="currency-flag"></span>
        <select>
          <option value="vnd">VND</option>
          <option value="usd">USD</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
