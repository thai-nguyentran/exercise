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
      // console.log(rule());
      acc += rule();
      return acc;
    }, 0);

    const totalProductsPrice = this.cart.calculateTotalProductsPrice();
    return totalProductsPrice - totalDiscountAmount;
  }
}

export default Counter;
