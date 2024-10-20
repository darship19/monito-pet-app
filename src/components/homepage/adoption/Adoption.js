import React from 'react';
import './Adoption.css';

const Adoption = () => {
  return (
    <div className="adoption-container">
      {/* Pet Sellers Section */}
      {/* Adoption Banner Section */}
      <div className="adoption-banner">
            <div className="adoption-text">
              <h2>Adoption <span>🐾</span></h2>
              <h3>We Need Help. So Do They.</h3>
              <p>Adopt a pet and give it a home, it will love you back unconditionally.</p>
                  <div className="adoption-buttons">
                    <button className="explore-now-btn">Explore Now</button>
                    <button className="view-intro-btn">View Intro</button>
                  </div>
            </div>
            <div className="adoption-image-container">
            <img 
              src="https://s3-alpha-sig.figma.com/img/dcc9/4436/190409de921d3586c62ceebc4d4890f1?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8NrE2vaO5QHwIITDlC1~FCe64o5Tr2rzfCGSXllxeW-WBvQfvJnXbWp78Fj8ywiLmmpGhXtTc9xVgBX44aHxWhO3vUe7liG4IlsQBy9jCDlIsdVsOOh4p82GELbxoL~sH0tbOHLAcjFE19fD3TWve8uCq60rQChiCTn6bODPiUHxtxbzDIerO6L3LkRKJGTyiROM41Vmwp04O3cFS6DNq3o6FR8iP92RgxdTlyp2gAQUw4OHQBNBZosSK7ODwQWM46GMPz4Trfqv3BFPHbCj0xFqzNTljzw3JEUnQC1I~zG08BJ9VmrUvG0A0Zvwh1-opMh2vcEvF~mQJIvA8Znwg__" 
              alt="Adoption" 
            />
            </div>
      </div>
    </div>
  );
};

export default Adoption;
