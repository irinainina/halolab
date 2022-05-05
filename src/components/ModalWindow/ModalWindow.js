import React from 'react';
import './ModalWindow.css';
import SelectCard from '../SelectCard/SelectCard';

const ModalWindow = ({allProducts, cheapProductIndex, selectCardIndex, onClose}) => {
  return (
    <div className="modal-window">
      <SelectCard 
      allProducts={allProducts}
      cheapProductIndex={cheapProductIndex}
      selectCardIndex={selectCardIndex} 
      onClose={onClose} />
    </div>
  );
};

export default ModalWindow;