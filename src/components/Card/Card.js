import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    const { category, name, price, onBuy} = this.props;
    return (
      <div className="card">
        <h3 className="category">{category}</h3>
        <h2 className="name">{name}</h2>
        <div className="sell-container">
          <p className="price">{price}</p>
          <button className="card-btn" onClick={onBuy}>Buy</button>
        </div>
      </div>
    );
  }
};

export default Card;
