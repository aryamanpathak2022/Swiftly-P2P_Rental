import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Card from '../Components/Card'; // Import the Card component
import chairImage from '../Assests/chair.png'; // Importing the image for the card
import './Home.css'; // Import the CSS file for Home styles
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="trending">
        <h2>Trending</h2>
        <button className="view-all-button">View All</button>
      </div>
      <div className="cards-container">
        {/* Rendering four Card components */}
        <Card productName="Chair" personName="John Doe" price="$50" />
        <Card productName="Table" personName="Jane Smith" price="$100" />
        <Card productName="Lamp" personName="Alice Johnson" price="$30" />
        <Card productName="Sofa" personName="Bob Williams" price="$200" />
        <Card productName="Sofa" personName="Bob Williams" price="$200" />
      </div>
        <Footer />

    </div>
  );
}

export default Home;
