import React from 'react';
import './Card.css'; // Assuming you have a CSS file to style the card
import chairImage from '../Assests/chair.png';

const Card = ({ productName, personName, price }) => {
  return (
    <div className="card">
        <img className="product-image" src={chairImage} alt="Chair" />
      <div className="card-content">
        <div className="product-info">
          <h2 className="product-name">{productName}</h2>
          <p className="person-name">{personName}</p>
        </div>
        <div className="price-info">
          <p className="price">{price}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
