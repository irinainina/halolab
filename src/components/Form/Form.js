import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form action="#">
      <input type="text" className="input name-input" placeholder="Name" />
      <input type="tel" className="input tel-input" placeholder="Number" />
      <button className="order-btn">Order</button>
    </form>
  );
};

export default Form;