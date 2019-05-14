import Product from './product';

class NonGroceryProduct extends Product {
  constructor(data = {}) {
    super(data);

    this.isGrocery = false;
  }
}

export default NonGroceryProduct;
