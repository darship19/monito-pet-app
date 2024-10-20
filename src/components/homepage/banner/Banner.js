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
          src="https://s3-alpha-sig.figma.com/img/cc4b/2826/12bf9db02e233aa64a34946d9a9aed4d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EGGORreW1fUguCWIDoifoPFQxwCco8akylTDedIJdT3B9HhEk1CQQPkccrJyeGKbwNJKnGhLktOtHqTqNOOpz1X8hYwe7-cHY2eyV-WpaID6GYXq~mtvR1EjwK9Pd-V4L5cG-B2-f3nlkE~t~SGpSBSzAhdCk5hBRGs-luvZsnXSXmiNxtITpUIg38Fd-OFgdDaNb5-MzJUOp8JqSJUNN2ajQyaE5ALkBW40xHH9-vionRmcLE-59ugsWBKUzf9d~lG4-0JrlUujbi2UVxXc8fHtMRZJg2oP~2xRp2jTYnESqDPHd6vNIXoiA2kavW7PsWh9PPTLdZfmMBKPLZMLng__"
          alt="Person with pet"
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
