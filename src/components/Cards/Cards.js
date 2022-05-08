import React from 'react';
import uuid from 'react-uuid';
import './Cards.css';
import Card from '../Card/Card';

const Cards = ({allProducts, onBuyApp}) => {
  const elements = allProducts.map((item, index) => {
    const {category, name, price} = item;
    return <Card key={uuid()}
                 category={category}
                 name={name}
                 price={price}
                 onBuy={() => onBuyApp(index)} />
  });
  
  return (
    <div className="cards-container">
      {elements}
    </div>
  );
};

export default Cards;