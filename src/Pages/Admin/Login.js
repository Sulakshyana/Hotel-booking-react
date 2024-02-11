import React, { useState } from 'react';
// import axios from 'axios';

const Login = () => {
  const [emailUsername, setEmailUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   // Log the request data before sending
  //   console.log('Submitting login request with data:', { emailUsername, password });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      // Log the request data before sending
      console.log('Submitting login request with data:', { emailUsername, password });
    
      try {
        // Send login request using fetch API
        const response = await fetch('http://localhost/hotel_booking_api/login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            emailusername: emailUsername,
            password: password,
          })
        });
    
        // Parse JSON response
        const data = await response.json();
    
        // Check if login was successful
        if (data.success) {
          // Redirect to admin page or handle successful Login
          console.log("successful login");
          window.location.href = '/EditRoom'; // Redirect using window.location
        } else {
          setError('Wrong username or password');
        }
      } catch (error) {
        // Handle errors
        console.error('Error logging in:', error);
        setError('An error occurred. Please try again.');
      }
    };
    
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Log In</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailUsername">Username or Email:</label>
            <input
              type="text"
              className="form-control"
              id="emailUsername"
              value={emailUsername}
              onChange={(e) => setEmailUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
