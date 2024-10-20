import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/LOGO.png';
import '../CSS/App.css';

function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/registration'); // Navigate to registration after loading
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div className="App-header">
      {loading ? (
        <>
          <p>Loading...</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>TECH कला</p>
        </>
      ) : (
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>TECH कला</p>
        </header>
      )}
    </div>
  );
}

export default SplashScreen;