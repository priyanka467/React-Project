import React from 'react';
import '../CSS/SplashScreen.css';
import logoImage from '../assets/images/LOGO.png'; // Import the image

const SplashScreen = () => {
  console.log("pktesting 11")
  return (
    <div className="splash-container">
      <div className="logo-container">
        <div className="logo-container-Internal">
          <img src={logoImage} alt="Tech Kala Logo" />
        </div>
        <h1>TECH कला</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
