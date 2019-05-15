import { expect } from 'chai';

import Product from './product';

describe('Product class', () => {
  it('should return blank default product object', () => {
    const product = new Product();
    expect(product).to.deep.equal({
      id: '',
      name: '',
      isGrocery: false,
      price: 0
    });
  });

  it('should return discountablePriceByPercentageBase in case of grocery product', () => {
    const product = new Product({
      isGrocery: true,
      price: 100
    });
    const discountablePriceByPercentageBase = product.discountablePriceByPercentageBase;

    expect(discountablePriceByPercentageBase).to.equal(0);
  });

  it('should return discountablePriceByPercentageBase in case of non-grocery product', () => {
    const product = new Product({
      isGrocery: false,
      price: 100
    });
    const discountablePriceByPercentageBase = product.discountablePriceByPercentageBase;

    expect(discountablePriceByPercentageBase).to.equal(100);
  });
});
