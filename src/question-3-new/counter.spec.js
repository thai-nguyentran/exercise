import { expect } from 'chai';

import Counter from './counter';
import Cart from './cart';
import mockData from '../test-data/data-q3-new';

describe('Counter class', () => {
  it('should return blank default Counter object', () => {
    const counter = new Counter();
    expect(counter.cart).to.be.an.instanceof(Cart);
  });

  it('checkout function: should re turn netPaymentValue in case of importing mockData', () => {
    const counter = new Counter({ cart: mockData });
    const netPaymentValue = counter.checkout();
    expect(netPaymentValue).to.equal(1177.5);
  });
});
