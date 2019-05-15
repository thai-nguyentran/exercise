import Customer from './customer';
import Product from './product';

class Cart {
  constructor(data = {}) {
    this.customer = new Customer(data.customer);
    this.items = data.items || [];

    this.calculateTotalProductsPrice = this.calculateTotalProductsPrice.bind(this);
    this.calculateTotalDiscountablePriceByProductCategory = this.calculateTotalDiscountablePriceByProductCategory.bind(this);
    this.calculateTotalDiscountAmountByCustomerType = this.calculateTotalDiscountAmountByCustomerType.bind(this);
    this.calculateTotalDiscountAmountByProductCategory = this.calculateTotalDiscountAmountByProductCategory.bind(this);
  }

  get discountPercentage() {
    return this.customer.discountPercentage;
  }

  calculateTotalProductsPrice() {
    return this.items.reduce((acc, item) => {
      const product = new Product(item);
      acc += product.price;
      return acc;
    }, 0);
  }

  calculateTotalDiscountablePriceByProductCategory() {
    return this.items.reduce((acc, item) => {
      const product = new Product(item);
      acc += product.discountAmountByCategory;
      return acc;
    }, 0);
  }

  calculateTotalDiscountAmountByCustomerType() {
    const totalDiscountablePriceByProductCategory = this.calculateTotalDiscountablePriceByProductCategory();

    return totalDiscountablePriceByProductCategory * this.discountPercentage;
  }

  calculateTotalDiscountAmountByProductCategory() {
    const totalProductsPrice = this.calculateTotalProductsPrice();
    const totalDiscountAmountByCustomerType = this.calculateTotalDiscountAmountByCustomerType();
    const tempoRemainingPrice = totalProductsPrice - totalDiscountAmountByCustomerType;

    if (tempoRemainingPrice > 100) {
      return Math.floor(tempoRemainingPrice / 100) * 5;
    }

    return 0;
  }
}

export default Cart;
