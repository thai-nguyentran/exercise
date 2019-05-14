import GroceryProduct from './grocery-product';
import NonGroceryProduct from './non-grocery-product';
import User from './user';
import EmployeeUser from './employee-user';
import AffiliateUser from './affiliate-user';
import CustomerUser from './customer-user';

class Bill {
  constructor(data = {}) {
    this.id = data.id; // billId
    this.products = data.products || [];

    if (data.user) {
      switch (true) {
        case data.user.isEmployee:
          this.user = new EmployeeUser(data.user);
          break;
        case data.user.isAffiliate:
          this.user = new AffiliateUser(data.user);
          break;
        case data.user.isCustomer:
          this.user = new CustomerUser(data.user);
          break;
        default:
          this.user = new User();
      }
    } else {
      this.user = new User();
    }
  }

  calculateTotalDiscountablePayment() {
    return this.products.reduce((acc, item) => {
      let product;

      if (item.isGrocery) {
        product = new GroceryProduct(item);
      } else {
        product = new NonGroceryProduct(item);
      }

      acc += product.discountablePrice;

      return acc;
    }, 0)
  }

  calculateDiscountValue() {
    const totalDiscountablePayment = this.calculateTotalDiscountablePayment();
    const discountByUserTypeValue = totalDiscountablePayment * this.user.discountPercentage;
    const tempRemainingPaymentValue = totalDiscountablePayment - discountByUserTypeValue;

    if (tempRemainingPaymentValue > 100) {
      return discountByUserTypeValue + (Math.floor(discountByUserTypeValue / 100) * 5);
    }

    return discountByUserTypeValue;
  }

  calculateNetPaymentValue() {
    return this.calculateTotalDiscountablePayment() - this.calculateDiscountValue();
  }
}

export default Bill;
