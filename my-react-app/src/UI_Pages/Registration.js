// Registration.js
import React from 'react';

function Registration() {
  return (
    <div className="registration">
      <h2>Create an Account</h2>
      <form id="registration-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;