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
    selectProduct: false
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
    this.setState(({selectCardIndex, selectProduct}) => {
      return {
        selectCardIndex: index,
        selectProduct: true
      }
    });
  };

  onClose = () => {
    this.setState(({selectCardIndex, selectProduct}) => {
      return {
        selectCardIndex: null,
        selectProduct: false
      }
    });
  };

  onSelect = () => {
    this.setState(({selectProduct}) => {
      return {
        selectProduct: true
      }
    });
  };

  render() {
    const { allProducts, cheapProductIndex, selectCardIndex, selectProduct } = this.state;    
    
    return (      
      <div className="container">
        { !selectProduct ? null : <ModalWindow 
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