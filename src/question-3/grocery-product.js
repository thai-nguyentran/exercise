import Product from './product';

class GroceryProduct extends Product {
  constructor(data = {}) {
    super(data);

    this.isGrocery = true;
  }

  get discountablePrice() {
    return 0;
  }
}

export default GroceryProduct;
