class APIServise {
  async getData() {
    const url = 'https://halolab.herokuapp.com/cards';
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  getAllProducts() {
    return this.getData();
  }

  async getCheapProductIndex() {
    const allProductsArr = await this.getData();
    const index = allProductsArr.reduce(
      (previousValue, currentValue, index, array) => {
      return (currentValue.price < array[previousValue].price) ? index : previousValue;
    }, 0);
    return index;
  }
}

export default APIServise