import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Importing CSS file for Login styles
import loginImage from '../Assests/sign_up.jpg'; // Importing image for the right section
import googleLogo from '../Assests/google.png'; // Importing Google logo
import facebookLogo from '../Assests/Facebook.jpeg'; // Importing Facebook logo
import githubLogo from '../Assests/github-logo.png'; // Importing GitHub logo

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const Navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/swiftly/loginn/', {
        email,
        password
      });

      if (response.status === 200) {
        // Save the tokens and user info
        localStorage.setItem('accessToken', response.data.tokens.access);
        localStorage.setItem('refreshToken', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect to the home page or another page
        Navigate('/dashboard');
        // print login successful
        console.log('Login Successful');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="swiftly-title">Swiftly</h2>
        <div className="login-form-container">
          <h3 className="welcome-text">Welcome</h3>
          <p className="signup-text">
            Not have an account already? <Link to="/signup">Sign Up</Link>
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
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p className="forgot-password"><Link to="/forgot-password">Forgot Password?</Link></p>
        </div>
      </div>
      <div className="login-right">
        <img src={loginImage} alt="Login" className="login-image" />
      </div>
    </div>
  );
};

export default Login;
