import { expect } from 'chai';

import {
  load,
  mapObjectTextItem,
  loadPairStringToObject
} from './load';
import mockData from '../test-data/data-q1.json';

describe('load function', () => {
  it('should return exactly mockData' , () => {
    const text = `a0=asdasdasdas;b0=sadqwuiyweuifs;c0=adqwhkdhk\na1=asdasdasdas;b1=sadqwuiyweuifs;c1=adqwhkdhk\na2=asdasdasdas;b2=sadqwuiyweuifs;c2=adqwhkdhk\n`;
    const data = load(text);
    const expectedData = [
      { a0: 'asdasdasdas', b0: 'sadqwuiyweuifs', c0: 'adqwhkdhk' },
      { a1: 'asdasdasdas', b1: 'sadqwuiyweuifs', c1: 'adqwhkdhk' },
      { a2: 'asdasdasdas', b2: 'sadqwuiyweuifs', c2: 'adqwhkdhk' }
    ];

    expect(data.length).to.equal(3);
    expect(data).to.deep.equal(expectedData);
  });

  it('should return exactly mockData with wrong starting characters (includes \'=\', \';\', \'\\n\')' , () => {
    const text = `=======;;;;;;;\n\n\na0=asdasdasdas;b0=sadqwuiyweuifs;c0=adqwhkdhk\na1=asdasdasdas;b1=sadqwuiyweuifs;c1=adqwhkdhk\na2=asdasdasdas;b2=sadqwuiyweuifs;c2=adqwhkdhk\n`;
    const data = load(text);
    const expectedData = [
      { a0: 'asdasdasdas', b0: 'sadqwuiyweuifs', c0: 'adqwhkdhk' },
      { a1: 'asdasdasdas', b1: 'sadqwuiyweuifs', c1: 'adqwhkdhk' },
      { a2: 'asdasdasdas', b2: 'sadqwuiyweuifs', c2: 'adqwhkdhk' }
    ];

    expect(data.length).to.equal(3);
    expect(data).to.deep.equal(expectedData);
  });

  it('should return exactly mockData with last character is not \'\\n\'' , () => {
    const text = `a0=asdasdasdas;b0=sadqwuiyweuifs;c0=adqwhkdhk\na1=asdasdasdas;b1=sadqwuiyweuifs;c1=adqwhkdhk\na2=asdasdasdas;b2=sadqwuiyweuifs;c2=adqwhkdhk`;
    const data = load(text);
    const expectedData = [
      { a0: 'asdasdasdas', b0: 'sadqwuiyweuifs', c0: 'adqwhkdhk' },
      { a1: 'asdasdasdas', b1: 'sadqwuiyweuifs', c1: 'adqwhkdhk' },
      { a2: 'asdasdasdas', b2: 'sadqwuiyweuifs', c2: 'adqwhkdhk' }
    ];

    expect(data.length).to.equal(3);
    expect(data).to.deep.equal(expectedData);
  });
});
