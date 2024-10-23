import React, { useState } from 'react';

const OnboardingAccountSetup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account setup logic
    console.log({ name, age, gender, state });
    alert('Account setup complete!');
  };

  return (
    <div className="onboarding-container">
      <div className="left-section">
        <h1>Let’s setup your account!</h1>
        <p>Your taste inspires our collection—discover the craftsmanship that speaks to you.</p>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your Age"
            required
          />
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Your Gender"
            required
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Your State"
            required
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingAccountSetup;
