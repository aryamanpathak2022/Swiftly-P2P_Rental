import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Importing CSS file for Login styles
import loginImage from '../Assests/log.png'; // Importing image for the right section
import googleLogo from '../Assests/google.png'; // Importing Google logo
import facebookLogo from '../Assests/Facebook.jpeg'; // Importing Facebook logo
import githubLogo from '../Assests/github-logo.png'; // Importing GitHub logo

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleSignup = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/swiftly/signupp/', {
        name: fullName,
        email,
        password
      });

      if (response.status === 201) {
        // Save the tokens and user info
        localStorage.setItem('accessToken', response.data.tokens.access);
        localStorage.setItem('refreshToken', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect to the home page or another page
        // history.push('/dashboard');
        // print signup successfull
        console.log('Signup Successfull');
      }
    } catch (error) {
      setError('Error creating account');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="swiftly-title">Swiftly</h2>
        <div className="login-form-container">
          <h3 className="welcome-text">Welcome</h3>
          <p className="signup-text">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
          <div className="social-icons">
            <button className="social-button">
              <img src={googleLogo} alt="Google" />
            </button>
            <button className="social-button">
              <img src={facebookLogo} alt="Facebook" />
            </button>
            <button className="social-button">
              <img src={githubLogo} alt="GitHub" />
            </button>
          </div>
          <div className="or-divider">
            <span className="line"></span>
            <span className="or-text">or</span>
            <span className="line"></span>
          </div>
          <form className="login-form" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full name"
              className="login-input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">Sign up</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
    </div>
  );
};

export default Signup;
