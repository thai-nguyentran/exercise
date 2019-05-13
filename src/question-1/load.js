export function load(text) {
  if (!text) return [];

  const itemTextArr = text.split('\n');

  return itemTextArr
    .filter(textItem => !!textItem)
    .map(mapObjectTextItem.bind(this));
}

export function mapObjectTextItem(textItem) {
  const objectItemText = textItem.split(';');

  return objectItemText
    .filter(pairString => pairString)
    .reduce(loadPairStringToObject.bind(this), {});
};

export function loadPairStringToObject(assigningObject, pairString) {
  if (!pairString) return {};

  const pair = pairString.split('=');

  if (pair[1].includes('\n')) {
    pair[1] = pair[1].split('\n')[0];
  }

  assigningObject[pair[0]] = pair[1];

  return assigningObject;
}