import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

function Navbar() {
  return (
    <div className='navvi'>
      <nav className="navbar">
        <div className="navbar-left">
          <span className="brand-name">Swiftly</span>
        </div>
        <div className="navbar-center">
          <button className="nav-button">Home</button>
          <button className="nav-button">Show</button>
          <button className="nav-button">Account</button>
          <button className="nav-button">Product</button>
          <button className="nav-button">Chat</button>
        </div>
        <div className="navbar-right">
          <Link to="/Login" className="nav-button-link">
            <button className="nav-button">Log In</button>
          </Link>
          <Link to="/Signup" className="nav-button-link">
            <button className="nav-button">Sign Up</button>
          </Link>
        </div>
      </nav>
      <div className="navbar-line"></div>
    </div>
  );
}

export default Navbar;
