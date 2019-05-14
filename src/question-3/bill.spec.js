import { expect } from 'chai';

import Bill from './bill';
import mockData from '../test-data/data-q3';

describe('Bill class', () => {
  it('should return blank default bill object', () => {
    const bill = new Bill();
    const exppectedData = {
      id: undefined,
      products: [],
      user: {
        id: null,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: false,
        joinDate: undefined
      }
    }
    expect(bill).to.deep.equal(exppectedData);
  });

  it('should return totalDiscountablePayment', () => {
    const billDetails = new Bill(mockData);
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    expect(totalDiscountablePayment).to.equal(1365);
  });

  it('should return totalDiscountValue', () => {
    const billDetails = new Bill(mockData);
    const totalDiscountValue = billDetails.calculateDiscountValue();
    expect(totalDiscountValue).to.equal(429.5);
  });

  it('should return netPaymentValue has been discount 30% in case of user is employee', () => {
    const billDetails = new Bill(mockData);
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(935.5);
  })

  it('should return netPaymentValue in case of missing user info', () => {
    const billDetails = new Bill({
      ...mockData,
      user: null
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(totalDiscountablePayment);
  })

  it('should return netPaymentValue has been discount 10% in case of user is affiliate', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: true,
        isCustomer: false
      }
    });
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(1223.5);
  })

  it('should return netPaymentValue has been discount 5% in case of user is customer and has joined before 2 years', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: true,
        joinDate: '1-1-2017'
      }
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(totalDiscountablePayment * 0.95);
  })

  it('should return netPaymentValue has been discount 5$ per 100$ in case of user has joined less than 2 years', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: false,
        joinDate: '1-1-2018'
      }
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(1365);
  })

  it('should return netPaymentValue in case of user is customer with not specific joinDate', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: true,
        joinDate: undefined
      }
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(1365);
  })

  it('should return netPaymentValue in case of user is customer with not specific joinDate and totalPaymentValue less than 100', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: true,
        joinDate: undefined
      },
      products: [
        {
          id: 'product0',
          name: 'Product 0',
          isGrocery: false,
          price: 40
        }
      ]
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(totalDiscountablePayment);
  })

  it('should return netPaymentValue in case of user is customer with not specific joinDate and totalPaymentValue less than 100', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: true,
        joinDate: '1-1-2018'
      },
      products: [
        {
          id: 'product0',
          name: 'Product 0',
          isGrocery: false,
          price: 40
        }
      ]
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(totalDiscountablePayment);
  })

  it('should return netPaymentValue in default case', () => {
    const billDetails = new Bill({
      ...mockData,
      user: {
        ...mockData.user,
        isEmployee: false,
        isAffiliate: false,
        isCustomer: false
      }
    });
    const totalDiscountablePayment = billDetails.calculateTotalDiscountablePayment();
    const netPaymentValue = billDetails.calculateNetPaymentValue();
    expect(netPaymentValue).to.equal(totalDiscountablePayment);
  })
})
