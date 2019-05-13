import Bill from './bill';
import data from '../test-data/data-q3';

function main() {
  const startTime = new Date();
  const billDetails = new Bill(data);
  const netPaymentValue = billDetails.calculateNetPaymentValue();
  const endTime = new Date();
  const executeTime = endTime - startTime;
  console.log(executeTime);
}

main();