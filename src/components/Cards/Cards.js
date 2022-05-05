import React from 'react';
import './Cards.css';
import Card from '../Card/Card';

const Cards = ({allProducts}) => {
  const elements = allProducts.map((item, index) => {
    const {category, name, price} = item;
    return <Card key={index} 
                 category={category}
                 name={name}
                 price={price} />
  });
  
  return (
    <div className="cards-container">
      {elements}
    </div>
  );
};

export default Cards;