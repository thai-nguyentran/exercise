import User from './user';

class AffiliateUser extends User {
  constructor(data = {}) {
    super(data);

    this.isEmployee = false;
    this.isAffiliate = true;
    this.isCustomer = false;
  }

  get discountPercentage() {
    return 0.1;
  }
}

export default AffiliateUser;
