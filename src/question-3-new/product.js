class Product {
  constructor(data = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.isGrocery = data.isGrocery || false;
    this.price = data.price || 0;
  }

  get discountablePriceByPercentageBase() {
    return this.isGrocery ? 0 : this.price;
  }
}

export default Product;
