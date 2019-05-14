import { expect } from 'chai';

import AffiliateUser from './affiliate-user';

describe('AffiliateUser class', () => {
  it('should return blank default user object', () => {
    const user = new AffiliateUser();
    expect(user).to.deep.equal({
      id: null,
      isEmployee: false,
      isAffiliate: true,
      isCustomer: false,
      joinDate: undefined
    });
  });
});
