const dataInput = require('../test-data/data.json');
const store = require('./store');
const load = require('./load');

function main() {
  const oldTimeStoreFunc = new Date();
  const text = store(dataInput);
  const newTimeStoreFunc = new Date();
  const data = load(text);
  const newTimeLoadFunc = new Date();

  const timeStampStore = newTimeStoreFunc - oldTimeStoreFunc;
  const timeStampLoad = newTimeLoadFunc - newTimeStoreFunc;
  console.log(timeStampStore, timeStampLoad);
}

main();
