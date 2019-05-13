import Bill from './bill';
import data from '../test-data/data-q3';

function main() {
  const billDetails = new Bill(data);
  const netPaymentValue = billDetails.calculateNetPaymentValue();
  console.log(netPaymentValue);
}

main();