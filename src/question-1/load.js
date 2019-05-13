function load(text) {
  if (!text) return [];

  const itemTextArr = text.split('\n');

  return itemTextArr.map(item => {
    const result = {};
    const childItemTextArr = item.split(';');

    childItemTextArr.forEach(childItemText => {
      const pair = childItemText.split('=');
      result[pair[0]] = pair[1];
    });

    return result;
  });
}

export default load;