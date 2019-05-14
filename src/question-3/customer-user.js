import User from './user';

class CustomerUser extends User {
  constructor(data = {}) {
    super(data);

    this.isEmployee = false;
    this.isAffiliate = false;
    this.isCustomer = true;
  }

  get discountPercentage() {
    if (this.joinDate) {
      const today = new Date();
      const joinDate = new Date(this.joinDate);
      const yearDiff = today.getFullYear() - joinDate.getFullYear();
      const monthDiff = today.getMonth() - joinDate.getMonth();
      const dayDiff = today.getDate() - joinDate.getDate();

      if (yearDiff > 2
          || (yearDiff === 2
              && (monthDiff > 0
                  || (monthDiff === 0 && dayDiff > 0)))) {
        return 0.05;
      }
    }

    return 0;
  }
}

export default CustomerUser;
