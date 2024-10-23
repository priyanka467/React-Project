// // import logo from '../src/assets/images/LOGO.png';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //         TECH कला
// //         </p>
        
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useEffect, useState } from 'react';
// import logo from '../src/assets/images/LOGO.png';
// import '../src/CSS/App.css';

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // 2 seconds

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   if (loading) {
//     return (
//       <div className="App-header">
//       <p>Loading...</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         TECH कला
//       </p>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           TECH कला
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash'); // splash or onboarding
  const [onboardingStep, setOnboardingStep] = useState(1); // onboarding steps

  // Splash screen should be visible for 2 seconds
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setCurrentScreen('onboarding');
    }, 2000); // 2 seconds

    return () => clearTimeout(splashTimeout);
  }, []);

  const handleNextStep = () => {
    if (onboardingStep < 4) {
      setOnboardingStep(onboardingStep + 1);
    }
  };

  return (
    <div className="App">
      {currentScreen === 'splash' ? (
        <SplashScreen />
      ) : (
        <Onboarding step={onboardingStep} onNext={handleNextStep} />
      )}
    </div>
  );
}

export default App;
