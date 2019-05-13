import { expect } from 'chai';

import User from './user';

describe('User class', () => {
  it('should return blank default user object', () => {
    const user = new User();
    expect(user).to.deep.equal({
      id: null,
      isEmployee: false,
      isAffiliate: false,
      isCustomer: false,
      joinDate: undefined
    })
  });
});