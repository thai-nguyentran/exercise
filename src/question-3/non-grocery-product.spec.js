import { expect } from 'chai';

import NonGroceryProduct from './non-grocery-product';

describe('NonGroceryProduct class', () => {
  it('should return blank default product object', () => {
    const product = new NonGroceryProduct();
    expect(product).to.deep.equal({
      id: undefined,
      name: undefined,
      isGrocery: false,
      price: 0
    });
  });
});
