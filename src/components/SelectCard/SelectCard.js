import React from 'react';
import './SelectCard.css';
import Form from '../Form/Form';

const SelectCard = ({allProducts, cheapProductIndex, selectCardIndex, onClose}) => {
  let index = Number.isInteger(selectCardIndex) ? selectCardIndex : cheapProductIndex;
  return (
    <div className="card select-card">
      <h3 className="category">{allProducts[index].category}</h3>
      <h2 className="name select-card-name">{allProducts[index].name}</h2>
      <p className="price select-card-price">{allProducts[index].price}</p>
      <Form />
      <div className="close"
      onClick={onClose}
      ></div>
    </div>
  );
};

export default SelectCard;