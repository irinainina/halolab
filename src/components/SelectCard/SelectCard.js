import React from 'react';
import './SelectCard.css';
import Form from '../Form/Form';

const SelectCard = () => {
  return (
    <div className="card select-card">
      <h3 className="category">Fruits</h3>
      <h2 className="name select-card-name">Orange Juice</h2>
      <p className="price select-card-price">4.99</p>
      <Form />
      <div className="close"></div>
    </div>
  );
};

export default SelectCard;