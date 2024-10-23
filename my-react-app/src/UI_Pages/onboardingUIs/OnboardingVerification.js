import React, { useState } from 'react';

const OnboardingVerification = ({ nextStep }) => {
  const [code, setCode] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    // Mock API call for verification
    nextStep();
  };

  return (
    <div className="onboarding-container">
      <div className="left-section">
        <h1>LOOKS LIKE YOU'RE NEW HERE!</h1>
        <p>Verify yourself to embark with us on this creative journey.</p>
      </div>
      <div className="right-section">
        <form onSubmit={handleVerify}>
          <label>Enter your Verification Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter verification code"
            required
          />
          <button type="submit">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingVerification;
