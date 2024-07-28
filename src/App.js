import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import MainComponent from './components/main';
import Pptgenerator from './components/pptGenerator';
import Excelgenerator from './components/excelGenerator';
import Additionalbutton from './components/AdditionalButton';
import SplashScreen from './components/splashscreen'; // Import the SplashScreen component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay (2000 ms = 2 seconds)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/pptgenerator" element={<Pptgenerator />} />
            <Route path="/excelgenerator" element={<Excelgenerator />} />
            <Route path="/additionalbutton" element={<Additionalbutton />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
