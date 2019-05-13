import { expect } from 'chai';

import {
  load,
  mapObjectTextItem,
  loadPairStringToObject
} from './load';
import mockData from '../test-data/data.json';

describe('load function', () => {
  it('should return exactly mockData\'s length' , () => {
    const text = `a0=asdasdasdas;b0=sadqwuiyweuifs;c0=adqwhkdhk\na1=asdasdasdas;b1=sadqwuiyweuifs;c1=adqwhkdhk\na2=asdasdasdas;b2=sadqwuiyweuifs;c2=adqwhkdhk\n`;
    const data = load(text);
    expect(data.length).to.equal(3);
  });
});

describe('mapObjectTextItem function', () => {
  it('should return first item\'s text', () => {
    const text = 'a7=asdasdasdas;b7=sadqwuiyweuifs;c7=adqwhkdhk\n';
    const result = mapObjectTextItem(text);
    const resultKeys = Object.keys(result);
    expect(result).not.to.be.null;
    expect(resultKeys.length).to.equal(3);
    expect(result).to.deep.equal({
      a7: 'asdasdasdas',
      b7: 'sadqwuiyweuifs',
      c7: 'adqwhkdhk'
    });
  });
});

describe('loadPairStringToObject function', () => {
  it('should return an object with the first value before the equal character is key and the second one is value', () => {
    const text = 'a0=asdasdasdas';
    const acc = {};
    const result = loadPairStringToObject(acc, text);
    expect(result).not.to.be.null;
    expect(Object.keys(result).length).to.equal(1);
    expect(Object.keys(result)[0]).to.equal('a0');
    expect(Object.values(result)[0]).to.equal('asdasdasdas');
  });

  it('should return an object with the first value before the equal character is key and the second one is value, remove the \'\\n\' character', () => {
    const text = 'a0=asdasdasdas\n';
    const acc = {};
    const result = loadPairStringToObject(acc, text);
    expect(result).not.to.be.null;
    expect(result).to.deep.equal({
      a0: 'asdasdasdas'
    });
  });
});