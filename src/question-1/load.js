export function load(text) {
  if (!text) return [];

  let result = [];
  let currentObj = {};
  let key = '';
  let value = '';
  let isUpdatingKey = true, isUpdatingValue = false;
  let textLength = text.length;

  for (let i = 0; i < textLength; ++i) {
    const character = text[i];

    switch (character) {
      case '=':
        if (key) {
          isUpdatingKey = false;
          isUpdatingValue = true;
        }
        break;
      case ';':
        if (key) {
          currentObj[key] = value;
          key = '';
          value = '';
          isUpdatingKey = true;
          isUpdatingValue = false;
        }
        break;
      case '\n':
        if (key) {
          currentObj[key] = value;
          result.push(currentObj);
          currentObj = {};
          key = '';
          value = '';
          isUpdatingKey = true;
          isUpdatingValue = false;
        }
        break;
      default:
        if (isUpdatingKey) {
          key += character;
        } else if (isUpdatingValue) {
          value += character;
        }

        if (i === textLength - 1) {
          currentObj[key] = value;
          result.push(currentObj);
          currentObj = {};
          key = '';
          value = '';
          isUpdatingKey = true;
          isUpdatingValue = false;
        }

        break;
    }
  }

  return result;
}
