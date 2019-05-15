import Counter from './counter';
import data from '../test-data/data-q3-new';

function main() {
  // const startTime = new Date();
  // const billDetails = new Bill(data);
  // const netPaymentValue = billDetails.calculateNetPaymentValue();
  // const endTime = new Date();
  // const executeTime = endTime - startTime;
  // console.log(netPaymentValue);
  const counter = new Counter({
    cart: data
  });
  const netPaymentValue = counter.checkout();
  console.log(netPaymentValue);
}

main();
