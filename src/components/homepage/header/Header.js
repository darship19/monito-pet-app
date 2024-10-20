// src/components/Header.js
import React from 'react';
import './Header.css';



const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-content">
          <h1>One More Friend <br /> Thousands More Fun!</h1>
          <p>
            Having a pet means you have more joy, a new friend, a happy person who will always 
            be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="buttons">
            <button className="outline-btn">View Intro</button>
            <button className="primary-btn">Explore Now</button>
          </div>
        </div>
        <div className="image-content">
          <img 
            src="/images/good-human.png"
            alt="Woman holding a corgi"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
