const isObject = (value) => typeof value === 'object';

const isBoolean = (value) => typeof value === 'boolean';

const isEmail = (value) => {
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.value = value;
  return emailInput.checkValidity();
};

const isURL = (value) => {
  const urlInput = document.createElement('input');
  urlInput.type = 'url';
  urlInput.value = value;
  return urlInput.checkValidity();
};

const isTel = (value) => value.split('').every(char => '+ 0123456789'.includes(char));

const isPostalCode = (value) => value.substr(0, 2) === '65'
  && value.length === 5 && value.split('').every(char => '0123456789'.includes(char));

const isInteger = (value) => value.split('').every(char => '0123456789'.includes(char));

const isUUID = (value) => {
  if (value.split('').every(char => '0123456789abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char))) {
    const partOfisUUID = value.split('-');
    if (partOfisUUID[0].length === 8 && partOfisUUID[1].length === 4
      && partOfisUUID[2].length === 4 && partOfisUUID[3].length === 4
      && partOfisUUID[4].length === 12 && value.length === 36) {
      return true;
    }
  }
}

const isDate = (value) => {
  if ((value.split('.').length - 1 === 2
    || value.split('/').length - 1 === 2
    || value.split('-').length - 1 === 2)
    && value.split('').every(char => '0123456789./-'.includes(char))) {
    const partOfDateWithDot = value.split('.');
    const partOfDateWithSlesh = value.split('/');
    const partOfDateWithDash = value.split('-');

    if (partOfDateWithDot[0] >= 1 && partOfDateWithDot[0] <= 31
      && partOfDateWithDot[1] >= 1 && partOfDateWithDot[1] <= 12) {
      return true;
    } if (partOfDateWithSlesh[0] >= 1 && partOfDateWithSlesh[0] <= 31
      && partOfDateWithSlesh[1] >= 1 && partOfDateWithSlesh[1] <= 12) {
      return true;
    } if (partOfDateWithDash[0] >= 1 && partOfDateWithDash[0] <= 31
      && partOfDateWithDash[1] >= 1 && partOfDateWithDash[1] <= 12) {
      return true;
    } else {
      return false;
    }
  }
};

const isIP = (value) => {
  if (value.split('.').length - 1 === 3
    && value.split('').every(char => '0123456789.'.includes(char))) {
    const partOfIP = value.split('.');
    if (partOfIP[0] >= 0 && partOfIP[0] <= 250
      && partOfIP[1] >= 0 && partOfIP[1] <= 250
      && partOfIP[2] >= 0 && partOfIP[2] <= 250
      && partOfIP[3] >= 0 && partOfIP[3] <= 250) {
      return true;
    } else {
      return false;
    }
  }
};

const isFloat = (value) => {
  const partOfValue = value.split('.');
  return partOfValue.length - 1 === 1 && partOfValue[0] !== '' && partOfValue[1] !== ''
    && value.split('').every(char => '.0123456789'.includes(char))
};

const isAddress = (value) => value.includes('street' || 'square' || 'avenue');

const isLongText = (value) => {
  return /\w+\s+\w+\s+\w+\w+\s/.test(value);
};

const isShortText = (value) => {
  return /\w+\s+\w+\s+\w+/.test(value);
};

const isWord = (value) => value.split('')
  .every(char => 'abcdefghijklmnopqrstuvwxyz'.includes(char));

export const checkType = (value) => {
  if (Array.isArray(value)) {
    return 'array';
  } else if (isObject(value)) {
    return 'object';
  } else if (isBoolean(value)) {
    return 'boolean';
  } else if (isPostalCode(value)) {
    return 'postal code'
  } else if (isInteger(value)) {
    return 'integer'
  } else if (isUUID(value)) {
    return 'universal unique identifier';
  } else if (isTel(value)) {
    return 'phone number';
  } else if (isDate(value)) {
    return 'date or datetime';
  } else if (isIP(value)) {
    return 'internet protocol address';
  } else if (isFloat(value)) {
    return 'floating - point digit';
  } else if (isURL(value)) {
    return 'url';
  } else if (isEmail(value)) {
    return 'email';
  } else if (isAddress(value)) {
    return 'street address';
  } else if (isLongText(value)) {
    return 'long text';
  } else if (isShortText(value)) {
    return 'short text';
  } else if (isWord) {
    return 'word';
  } else {
    return 'undefined';
  }
};
