import React, { useState, useEffect } from 'react';
import OnboardingMobileInput from '../src/UI_Pages/onboardingUIs/OnboardingMobileInput';
import OnboardingVerification from '../src/UI_Pages/onboardingUIs/OnboardingVerification';
import OnboardingAccountSetup from '../src/UI_Pages/onboardingUIs/OnboardingAccountSetup';
import SplashScreen from '../src/components/SplashScreen'; // Importing the SplashScreen component

import './CSS/App.css'; // Import the CSS if required

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash'); // 'splash' or 'onboarding'
  const [onboardingStep, setOnboardingStep] = useState(1); // onboarding steps

  // Splash screen should be visible for 2 seconds
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setCurrentScreen('onboarding'); // After 2 seconds, switch to onboarding
    }, 2000); // 2 seconds

    return () => clearTimeout(splashTimeout); // Cleanup the timeout
  }, []);

  const handleNextStep = () => {
    if (onboardingStep < 3) {
      setOnboardingStep(onboardingStep + 1);
    }
  };

  return (
    <div>
      {currentScreen === 'splash' && <SplashScreen />} {/* Using SplashScreen component */}

      {currentScreen === 'onboarding' && (
        <>
          {onboardingStep === 1 && <OnboardingMobileInput nextStep={handleNextStep} />}
          {onboardingStep === 2 && <OnboardingVerification nextStep={handleNextStep} />}
          {onboardingStep === 3 && <OnboardingAccountSetup />}
        </>
      )}
    </div>
  );
}

export default App;
