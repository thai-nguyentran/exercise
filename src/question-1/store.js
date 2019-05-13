function store(arr) {
  if (!arr || arr.length === 0) { return null; }

  return arr.reduce(getDataItemString.bind(this), '');
}

function getDataItemString(acc, item) {
  acc += Object.keys(item)
    .reduce((childAcc, prop, childIndex) => flattenObjectToString(item, childAcc, prop, childIndex), '');

  return acc;
}

function flattenObjectToString(data, acc, prop, index) {
  if (!data || Object.keys([data]).length === 0) { return ''; }

  acc += `${ prop }=${ data[prop] }`;

  if (index !== Object.keys(data).length - 1) {
    acc += ';';
  } else {
    acc += '\n';
  }

  return acc;
}

export default store;