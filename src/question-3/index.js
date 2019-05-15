import Counter from './counter';
import data from '../test-data/data-q3';

function main() {
  const counter = new Counter({ cart: data });
  const netPaymentValue = counter.checkout();
  console.log(netPaymentValue);
}

main();
