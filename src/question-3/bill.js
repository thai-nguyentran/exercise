import Product from './product';

class Bill {
  constructor(data = {}) {
    this.id = data.id; // billId
    this.user = data.user || null;
    this.products = data.products || [];
  }

  get totalDiscountablePayment() {
    return this.products.reduce((acc, item) => {
      const product = new Product(item);

      if (!product.isGrocery) {
        acc += product.price;
      }

      return acc;
    }, 0)
  }

  calculateNetPaymentValue() {
    const newestTotalDiscountablePayment = this.totalDiscountablePayment;

    if (!this.user) {
      return newestTotalDiscountablePayment;
    }

    switch (true) {
      case this.user.isEmployee:
        return newestTotalDiscountablePayment * 0.7;
      case this.user.isAffiliate:
        return newestTotalDiscountablePayment * 0.9;
      case this.user.isCustomer:
        if (!this.user.joinDate) {
          if (newestTotalDiscountablePayment > 100) {
            return newestTotalDiscountablePayment
                    - (Math.round(newestTotalDiscountablePayment / 100) * 5);
          }

          return newestTotalDiscountablePayment;
        }

        const today = new Date();
        const joinDate = new Date(this.user.joinDate);
        const yearDiff = today.getFullYear() - joinDate.getFullYear();
        const monthDiff = today.getMonth() - joinDate.getMonth();
        const dayDiff = today.getDate() - joinDate.getDate();

        if (yearDiff > 2
            || (yearDiff === 2
                && (monthDiff > 0
                    || (monthDiff === 0 && dayDiff > 0)))) {
          return newestTotalDiscountablePayment * 0.95;
        }

        if (newestTotalDiscountablePayment > 100) {
          return newestTotalDiscountablePayment
                  - (Math.round(newestTotalDiscountablePayment / 100) * 5);
        }

        return newestTotalDiscountablePayment;
      default:
        return newestTotalDiscountablePayment;
    }
  }
}

export default Bill;