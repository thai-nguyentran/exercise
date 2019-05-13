import Bill from './bill';

class User {
  constructor(data = {}) {
    this.id = data.id || null;
    this.isEmployee = data.isEmployee || false;
    this.isAffiliate = data.isAffiliate || false;
    this.isCustomer = data.isCustomer || false;
    this.joinDate = data.joinDate;
  }
}

export default User;