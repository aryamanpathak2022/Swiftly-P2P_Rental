import React from 'react';
import './Footer.css'; // Importing CSS file for Footer styles
import githubLogo from '../Assests/github-logo.jpg'; // Importing GitHub logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <h2 className="swiftly">Swiftly</h2>
      </div>
      <div className="middle-section">
        <h3 className='aryaman'>Made with 💖 by Aryaman Pathak</h3>
        <a href="https://github.com/aryamanpathak2022" target="_blank" rel="noopener noreferrer">
          <img className="github-logo" src={githubLogo} alt="GitHub Logo" />
        </a>
      </div>
      <div className="right-section">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <form className="email-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Email Us</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
