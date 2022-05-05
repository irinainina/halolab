class APIServise {
  async getData() {
    const base = 'https://run.mocky.io/v3/';
    const key = 'b7d36eea-0b3f-414a-ba44-711b5f5e528e';
    const url = base + key;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  getAllProducts() {
    return this.getData();
  }

  async getCheapProduct() {
    const allProductsArr = await this.getData();
    const indexCheapProduct = allProductsArr.reduce(
      (previousValue, currentValue, index, array) => {
      return (currentValue.price < array[previousValue].price) ? index : previousValue;
    }, 0);
    return allProductsArr[indexCheapProduct];
  }
}

export default APIServise