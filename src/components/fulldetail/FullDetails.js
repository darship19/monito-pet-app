// src/components/fulldetail/FullDetails.js
import React from 'react';
import './FullDetails.css';

const FullDetails = () => {
  return (
    <div className="full-details-container">
      {/* Image Carousel */}
      <div className="carousel">
        <img src="/images/shiba1.jpg" alt="Shiba Inu" className="main-image" />
        <div className="thumbnail-container">
          <img src="/images/shiba1.jpg" alt="Shiba 1" className="thumbnail" />
          <img src="/images/shiba2.jpg" alt="Shiba 2" className="thumbnail" />
          <img src="/images/shiba3.jpg" alt="Shiba 3" className="thumbnail" />
          <img src="/images/shiba4.jpg" alt="Shiba 4" className="thumbnail" />
          <img src="/images/shiba5.jpg" alt="Shiba 5" className="thumbnail" />
        </div>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h1>Shiba Inu Sepia</h1>
        <p className="price">34,000,000 VND</p>

        {/* Product Information */}
        <table className="details-table">
          <tbody>
            <tr>
              <td>Gender:</td>
              <td>Female</td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>2 Months</td>
            </tr>
            <tr>
              <td>Size:</td>
              <td>Small</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td>Apricot & Tan</td>
            </tr>
            <tr>
              <td>Vaccinated:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Dewormed:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Cert:</td>
              <td>Yes (MKA)</td>
            </tr>
            <tr>
              <td>Microchip:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>Vietnam</td>
            </tr>
            <tr>
              <td>Published Date:</td>
              <td>12-Oct-2022</td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="buttons">
          <button className="contact-btn">Contact us</button>
          <button className="chat-btn">Chat with Monito</button>
        </div>

        {/* Health and Identification Guarantees */}
        <div className="guarantee">
          <p>100% health guarantee for pets</p>
          <p>100% guarantee of pet identification</p>
        </div>
      </div>
    </div>
  );
};

export default FullDetails;
