import React from 'react';
import '../CSS/Onboarding.css';

const Onboarding = ({ step, onNext }) => {
  return (
    <div className="onboarding-container">
      {step === 1 && (
        <div className="onboarding-step">
          <div class="onboarding-title">
            LOOKS LIKE YOU'RE NEW HERE!
          </div>
          <p>Sign up with your mobile number to get started.</p>
          <button onClick={onNext}>Sign Up</button>
        </div>
      )}
      {step === 2 && (
        <div className="onboarding-step">
          <h2>Verify Your Number</h2>
          <p>Enter the OTP sent to your mobile number.</p>
          <input type="text" placeholder="Enter OTP" />
          <button onClick={onNext}>Verify</button>
        </div>
      )}
      {step === 3 && (
        <div className="onboarding-step">
          <h2>Let's Setup Your Account</h2>
          <p>Fill in the details to complete your profile.</p>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Age" />
            <input type="text" placeholder="Your Gender" />
            <input type="text" placeholder="Your State" />
            <button type="button" onClick={onNext}>Continue</button>
          </form>
        </div>
      )}
      {step === 4 && (
        <div className="onboarding-step">
          <h2>You're All Set!</h2>
          <p>Welcome to Tech Kala! Explore the art world.</p>
          <button onClick={onNext}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
