import React, { useState } from 'react';

const OnboardingMobileInput = ({ nextStep }) => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call or validation logic
    nextStep();
  };

  return (
    <div className="onboarding-container">
      <div className="left-section">
        <h1>LOOKS LIKE YOU'RE NEW HERE!</h1>
        <p>Verify yourself to embark with us on this creative journey.</p>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <label>Enter your mobile number</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingMobileInput;
