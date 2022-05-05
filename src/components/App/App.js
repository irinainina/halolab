import React, {Component} from 'react';
import './App.css';
import Cards from '../Cards/Cards';
import CheapBtn from '../CheapBtn/CheapBtn';
import ModalWindow from '../ModalWindow/ModalWindow';
import APIServise from '../../servises/api-servise';

class App extends Component {
  state = {
    allProducts: [],
    cheapProduct: {},
    selectCardIndex: null
  }

  apiServise = new APIServise();

  constructor() {
    super();
    this.getAllProducts();
  }

  getAllProducts() {
    this.apiServise.getAllProducts()
      .then(items => {
         this.setState({
          allProducts: items
         })
         console.log(items);
      })
  }

  getCheapProduct() {
    this.apiServise.getCheapProduct()
      .then(item => {
         this.setState({
          cheapProduct: item
         })
         console.log(item);
      })
  }

  render() {
    const { allProducts, cheapProduct, selectCardIndex } = this.state;    
    
    return (      
      <div className="container">
        {selectCardIndex ? <ModalWindow /> : null}
        <Cards allProducts={allProducts} />
        <CheapBtn cheapProduct={cheapProduct} />
      </div>
    );
  }  
};

export default App;