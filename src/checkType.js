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

const isTel = (value) => /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);

const isPostalCode = (value) => /^\d{5}(?:[-\s]\d{4})?$/.test(value);

const isInteger = (value) => typeof value === 'number' && Number.isInteger(value) ? true : false;

const isFloat = (value) => typeof value === 'number' && !Number.isInteger(value) ? true : false;

const isUUID = (value) => /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(value);

const isDate = (value) => {
  if (typeof value !== 'string') {
    return false;
  }

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
  if (typeof value !== 'string') {
    return false;
  }

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
  }

  if (isObject(value)) {
    return 'object';
  }

  if (isBoolean(value)) {
    return 'boolean';
  } 
  
  if (isPostalCode(value)) {
    return 'postal code'
  }
  
  if (isInteger(value)) {
    return 'integer'
  }
  
  if (isUUID(value)) {
    return 'universal unique identifier';
  }
  
  if (isTel(value)) {
    return 'phone number';
  }
  
  if (isDate(value)) {
    return 'date or datetime';
  }
  
  if (isIP(value)) {
    return 'internet protocol address';
  }
  
  if (isFloat(value)) {
    return 'floating - point digit';
  }
  
  if (isURL(value)) {
    return 'url';
  }
  
  if (isEmail(value)) {
    return 'email';
  }
  
  if (isAddress(value)) {
    return 'street address';
  }
  
  if (isLongText(value)) {
    return 'long text';
  }
  
  if (isShortText(value)) {
    return 'short text';
  }
  
  if (isWord) {
    return 'word';
  } else {
    return 'undefined';
  }
};
