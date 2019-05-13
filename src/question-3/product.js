class Product {
  constructor(data = {}) {
    this.id = data.id;
    this.name = data.name;
    this.isGrocery = data.isGrocery || false; // it's should be category info here, but it's un-use in this case
    this.price = data.price || 0;
  }
}

export default Product;