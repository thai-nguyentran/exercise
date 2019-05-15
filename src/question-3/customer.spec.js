import { expect } from 'chai';

import Customer from './customer';

describe('Customer class', () => {
  it('should return blank default Customer object', () => {
    const customer = new Customer();
    expect(customer).to.deep.equal({
      id: '',
      name: '',
      isEmployee: false,
      isAffiliate: false,
      yearOfLoyalty: 0
    })
  });

  it('discountPercentage function: should return discountPercentage value in case of default Customer instance', () => {
    const customer = new Customer();
    const discountPercentage = customer.discountPercentage;
    expect(discountPercentage).to.equal(0);
  });

  it('discountPercentage function: should return discountPercentage value in case of default Customer is employee', () => {
    const customer = new Customer({
      isEmployee: true
    });
    const discountPercentage = customer.discountPercentage;
    expect(discountPercentage).to.equal(0.3);
  });

  it('discountPercentage function: should return discountPercentage value in case of default Customer is affiliate', () => {
    const customer = new Customer({
      isAffiliate: true
    });
    const discountPercentage = customer.discountPercentage;
    expect(discountPercentage).to.equal(0.1);
  });

  it('discountPercentage function: should return discountPercentage value in case of default Customer is customer with yearOfLoyalty more than 2 years', () => {
    const customer = new Customer({
      yearOfLoyalty: 3
    });
    const discountPercentage = customer.discountPercentage;
    expect(discountPercentage).to.equal(0.05);
  });

  it('discountPercentage function: should return discountPercentage value in case of default Customer is customer with yearOfLoyalty less than 2 years', () => {
    const customer = new Customer({
      yearOfLoyalty: 1
    });
    const discountPercentage = customer.discountPercentage;
    expect(discountPercentage).to.equal(0);
  });
});
