import React, {Component} from 'react';
import './App.css';
import Cards from '../Cards/Cards';
import CheapBtn from '../CheapBtn/CheapBtn';
import ModalWindow from '../ModalWindow/ModalWindow';
import APIServise from '../../servises/api-servise';

class App extends Component {
  state = {
    allProducts: [],
    cheapProductIndex: null,
    selectCardIndex: null,
    isSelectProduct: false
  }

  apiServise = new APIServise();

  constructor() {
    super();
    this.getAllProducts();
    this.getCheapProductIndex();
  }

  getAllProducts() {
    this.apiServise.getAllProducts()
      .then(items => {
         this.setState({
          allProducts: items
         })
      })
  }

  getCheapProductIndex() {
    this.apiServise.getCheapProductIndex()
      .then(index => {
         this.setState({
          cheapProductIndex: index
         })
      })
  }

  getSelectCard = (index) => {
    this.setState({
      selectCardIndex: index,
      isSelectProduct: true
    });
  };

  onClose = () => {
    this.setState({
      selectCardIndex: null,
      isSelectProduct: false
    });
  };

  onSelect = () => {
    this.setState({
      isSelectProduct: true
    });
  };

  render() {
    const { allProducts, cheapProductIndex, selectCardIndex, isSelectProduct } = this.state;    
    
    return (      
      <div className="container">
        { !isSelectProduct ? null : <ModalWindow 
        allProducts={allProducts}
        cheapProductIndex={cheapProductIndex}
        selectCardIndex={selectCardIndex}
        onClose={this.onClose} />}
        <Cards 
        allProducts={allProducts} 
        onBuyApp={this.getSelectCard} />
        <CheapBtn 
        onCheapBtnClick={this.onSelect} />
      </div>
    );
  }  
};

export default App;