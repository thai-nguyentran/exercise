import { expect } from 'chai';

import EmployeeUser from './employee-user';

describe('EmployeeUser class', () => {
  it('should return blank default user object', () => {
    const user = new EmployeeUser();
    expect(user).to.deep.equal({
      id: null,
      isEmployee: true,
      isAffiliate: false,
      isCustomer: false,
      joinDate: undefined
    });
  });
});
