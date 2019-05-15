import { expect } from 'chai';

import Cart from './cart';
import Customer from './customer';
import mockData from '../test-data/data-q3-new';

describe('Cart class', () => {
  it('should return blank default Cart object', () => {
    const cart = new Cart();
    expect(cart).to.be.an.instanceof(Cart);
    expect(cart.customer).to.be.an.instanceof(Customer);
    expect(cart.items).to.not.be.null;
    expect(cart.items.length).to.equal(0);
  });

  it('discountPercentage function: should return discountPercentage in case of default blank customer', () => {
    const cart = new Cart();
    const discountPercentage = cart.discountPercentage;
    expect(discountPercentage).to.equal(0);
  });

  it('calculateTotalProductsPrice function: should return 0 in case of no data of cart', () => {
    const cart = new Cart();
    const calculateTotalProductsPrice = cart.calculateTotalProductsPrice();
    expect(calculateTotalProductsPrice).to.equal(0);
  });

  it('calculateTotalProductsPrice function: should return totalProductsPrice in case of importing mockData', () => {
    const cart = new Cart(mockData);
    const totalProductsPrice = cart.calculateTotalProductsPrice();
    expect(totalProductsPrice).to.equal(1647);
  });

  it('calculateTotalDiscountablePriceByProductCategory function: should return totalDiscountablePriceByProductCategory in case of importing mockData', () => {
    const cart = new Cart(mockData);
    const totalDiscountablePriceByProductCategory = cart.calculateTotalDiscountablePriceByProductCategory();
    expect(totalDiscountablePriceByProductCategory).to.equal(1365);
  });

  it('calculateTotalDiscountAmountByCustomerType function: should return calculateTotalDiscountAmountByCustomerType in case of importing mockData', () => {
    const cart = new Cart(mockData);
    const totalDiscountAmountByCustomerType = cart.calculateTotalDiscountAmountByCustomerType();
    expect(totalDiscountAmountByCustomerType).to.equal(409.5);
  });

  it('calculateTotalDiscountAmountByProductCategory function: should return totalDiscountAmountByProductCategory in case of importing mockData', () => {
    const cart = new Cart(mockData);
    const totalDiscountAmountByProductCategory = cart.calculateTotalDiscountAmountByProductCategory();
    expect(totalDiscountAmountByProductCategory).to.equal(60);
  });

  it('calculateTotalDiscountAmountByProductCategory function: should return totalDiscountAmountByProductCategory in case of totalProductsPrice is less than 100', () => {
    const cart = new Cart({
      ...mockData,
      items: [mockData.items[0]]
    });
    const totalDiscountAmountByProductCategory = cart.calculateTotalDiscountAmountByProductCategory();
    expect(totalDiscountAmountByProductCategory).to.equal(0);
  })
});
