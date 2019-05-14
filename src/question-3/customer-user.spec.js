import { expect } from 'chai';

import CustomerUser from './customer-user';

describe('CustomerUser class', () => {
  it('should return blank default user object', () => {
    const user = new CustomerUser();
    expect(user).to.deep.equal({
      id: null,
      isEmployee: false,
      isAffiliate: false,
      isCustomer: true,
      joinDate: undefined
    })
  });

  it('should return discountPercentage equal as zero with user has null joinDate', () => {
    const user = new CustomerUser();
    const result = user.discountPercentage;
    expect(result).to.equal(0);
  });

  it('should return discountPercentage equal as zero with user who has joined less than 2 years', () => {
    const user = new CustomerUser({
      joinDate: '1-1-2018'
    });
    const result = user.discountPercentage;
    expect(result).to.equal(0);
  });

  it('should return discountPercentage with user who has joined more than 2 years', () => {
    const user = new CustomerUser({
      joinDate: '1-1-2017'
    });
    const result = user.discountPercentage;
    expect(result).to.equal(0.05);
  });
});
