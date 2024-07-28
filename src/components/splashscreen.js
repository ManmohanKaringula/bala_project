import React from 'react';
import './splashscreen.css'; // Import the CSS file for splash screen

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={process.env.PUBLIC_URL + '/assets/logo.gif'} alt="Loading..." />
    </div>
  );
};

export default SplashScreen;
