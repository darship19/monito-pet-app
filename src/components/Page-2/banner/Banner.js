// Banner.js

import React from "react";
import "./Banner.css"; // Importing the CSS file

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-container-2nd">
      {/* Left side: Image with decorative curve */}
      <div className="banner-image-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/63ed/2cc9/7ebd1b80435a9c0d9051f445ecc741d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LdUx0o3uFM1A~j9pDbETTdfwtE0w7FV4fha~fKYwrp5UcEa1NbVmQJOdijlXC8s7N2kVsCu-z0GPrYUXLHMz3wlERbKrZNvGrKT07RdvM8lWycrhhXWVdKu1CW78YGUz1Bbt7ZD23fQpmLfOFedvz31RXzcWc9xawyzl8MoLG8TchESzZ73dRQphIj0E9pVPlI-4~AyW7Tl03n1WH6oqXcpW4ZntO6~WCYLNmcQH2dArb4NDiRNeMX1dnaw3U7DKCS~-L0kwnfcfqhPmn10ZGUQu6ggv0Lk8XSdzYd~9S~3bWFqNV-RHO-x0Ac1taNsACHqntDSJ-r4HXnr~2Vl9Nw__"
          className="banner-image"
        />
      </div>

      {/* Right side: Content */}
      <div className="banner-content">
        <h1 className="banner-title">One More Friend</h1>
        <h2 className="banner-subtitle">Thousands More Fun!</h2>
        <p className="banner-text">
          Having a pet means you have more joy, a new friend, and a happy person
          who will always be with you to have fun. We have 200+ different pets
          that can meet your needs!
        </p>

        {/* Buttons */}
        <div className="banner-buttons">
          <button className="banner-button banner-button-secondary">
            View Intro
          </button>
          <button className="banner-button banner-button-primary">
            Explore Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
