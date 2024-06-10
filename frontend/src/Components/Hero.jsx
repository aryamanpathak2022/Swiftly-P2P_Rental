import React from 'react';
import './Hero.css';
import carImage from '../Assests/car.png'; // Adjust the path according to your project structure

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Transform How You Share</h1>
        <p className="hero-subtitle">Peer-to-Peer Rentals for Everyday Essentials</p>
        <div className="hero-buttons">
          <button className="hero-button">Rent Now</button>
          <button className="hero-button2">Lend Now</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={carImage} alt="car" />
      </div>
    </div>
  );
}

export default Hero;
