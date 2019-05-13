import { expect } from 'chai';

import Product from './product';

describe('Product class', () => {
  it('should return blank default product object', () => {
    const product = new Product();
    expect(product).to.deep.equal({
      id: undefined,
      name: undefined,
      isGrocery: false,
      price: 0
    });
  });
});