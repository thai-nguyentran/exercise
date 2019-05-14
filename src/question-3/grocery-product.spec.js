import { expect } from 'chai';

import GroceryProduct from './grocery-product';

describe('GroceryProduct class', () => {
  it('should return blank default product object', () => {
    const product = new GroceryProduct();
    expect(product).to.deep.equal({
      id: undefined,
      name: undefined,
      isGrocery: true,
      price: 0
    });
  });
});
