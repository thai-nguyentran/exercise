import Cart from './cart';

class Counter {
  constructor(data = {}) {
    this.cart = new Cart(data.cart);

    const discountAmountByCustomerType = this.cart.calculateTotalDiscountAmountByCustomerType;
    const discountAmountByProductCategory = this.cart.calculateTotalDiscountAmountByProductCategory;
    this.rules = [ discountAmountByCustomerType, discountAmountByProductCategory ];
  }

  checkout() {
    const totalDiscountAmount = this.rules.reduce((acc, rule) => {
      acc += rule();
      return acc;
    }, 0);

    return this.cart.totalProductsPrice - totalDiscountAmount;
  }
}

export default Counter;
