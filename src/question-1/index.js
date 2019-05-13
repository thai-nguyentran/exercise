import dataInput from '../test-data/data.json';
import { store } from './store';
import { load } from './load';

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
