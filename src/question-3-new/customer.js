class Customer {
  constructor(data = {}) {
    this.id = data.id || '';
    this.name = data.name || '';
    this.isEmployee = data.isEmployee || false;
    this.isAffiliate = data.isAffiliate || false;
    this.yearOfLoyalty = data.yearOfLoyalty || 0;
  }

  get discountPercentage() {
    switch (true) {
      case this.isEmployee:
        return 0.3;
      case this.isAffiliate:
        return 0.1;
      case this.yearOfLoyalty > 2:
        return 0.05;
      default:
        return 0;
    }
  }
}

export default Customer;
