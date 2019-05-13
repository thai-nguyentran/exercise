import { expect } from 'chai';

import {
  store,
  getDataItemString,
  flattenObjectToString
} from './store';
import mockData from '../test-data/data.json';

describe('store function', () => {
  it('should return exactly mockData\'s length' , () => {
    const text = store(mockData);
    const lines = text.split('\n');
    expect(lines.length - 1).to.equal(mockData.length);
  });
});

describe('getDataItemString function', () => {
  it('should return first item\'s text', () => {
    const data = {
      a0: 'asdasdasdas',
      b0: 'sadqwuiyweuifs',
      c0: 'adqwhkdhk'
    };
    const acc = [];
    const result = getDataItemString(acc, data);
    expect(result).to.equal('a0=asdasdasdas;b0=sadqwuiyweuifs;c0=adqwhkdhk\n');
  });
});

describe('flattenObjectToString function', () => {
  const data = {
    a0: 'asdasdasdas',
    b0: 'sadqwuiyweuifs',
    c0: 'adqwhkdhk'
  };

  it('should return the first key=value pairing in data', () => {
    const acc = '';
    const prop = 'a0';
    const index = 0;
    const result = flattenObjectToString(data, acc, prop, index);
    expect(result).to.equal('a0=asdasdasdas;');
  });

  it('should return the last key=value pairing in data with the last character is \'\\n\'', () => {
    const acc = '';
    const prop = 'c0';
    const index = 2;
    const result = flattenObjectToString(data, acc, prop, index);
    expect(result).to.equal('c0=adqwhkdhk\n');
  });
});