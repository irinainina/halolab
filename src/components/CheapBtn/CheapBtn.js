import React, { Component } from 'react';
import './CheapBtn.css';

class CheapBtn extends Component {
  render() {
    const { onCheapBtnClick } = this.props;
    return (
      <button className="cheap-btn"
      onClick={onCheapBtnClick}
      >Buy cheapest</button>
    );
  }

};

export default CheapBtn;