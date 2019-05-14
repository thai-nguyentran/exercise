import User from './user';

class EmployeeUser extends User {
  constructor(data = {}) {
    super(data);

    this.isEmployee = true;
    this.isAffiliate = false;
    this.isCustomer = false;
  }

  get discountPercentage() {
    return 0.3;
  }
}

export default EmployeeUser;
