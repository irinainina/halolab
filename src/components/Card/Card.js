import React from 'react';
import './Card.css';

const Card = ({ category, name, price }) => {
  
  return (
    <div className="card">
      <h3 className="category">{category}</h3>
      <h2 className="name">{name}</h2>
      <div className="sell-container">
        <p className="price">{price}</p>
        <button className="card-btn">Buy</button>
      </div>
    </div>
  );
};

export default Card;
