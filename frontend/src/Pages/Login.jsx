import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Importing CSS file for Login styles
import loginImage from '../Assests/sign_up.jpg'; // Importing image for the right section
import googleLogo from '../Assests/google.png'; // Importing Google logo
import facebookLogo from '../Assests/Facebook.jpeg'; // Importing Facebook logo
import githubLogo from '../Assests/github-logo.png'; // Importing GitHub logo

const Login = () => {
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
          <form className="login-form">
            
            <input type="email" placeholder="Email" className="login-input" />
            <input type="password" placeholder="Password" className="login-input" />
            <button type="submit" className="login-button">Login</button>
          </form>
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
