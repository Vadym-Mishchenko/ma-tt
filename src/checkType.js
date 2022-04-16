// import output from './api/output.json'

export const checkType = (value) => {
  if (Array.isArray(value)) {
    return 'array';
  }
  if (typeof value === 'object') {
    return 'object';
  }
  if (/true|false/.test(value)) {
    return 'boolean';
  }
  if (/^\d{5}$/.test(value)) {
    return 'postal code'
  }
  if (/^\d+$/.test(value)) {
    return 'integer number'
  }
  if (/^[{(]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[)}]?$/.test(value)) {
    return 'universal unique identifier';
  }
  if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value)) {
    return 'phone number';
  }
  if (/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/.test(value)) {
    return 'date or datetime';
  }
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\:([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?/.test(value)) {
    return 'internet protocol address';
  }
  if (/^[0-9]+\.[0-9]+$/.test(value)) {
    return 'floating - point digit';
  }
  if (/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i.test(value)) {
    return 'url';
  }
  if (/\w+\@\w+\.\w+/.test(value)) {
    return 'email'
  }
  if (/\[a-z]\street|str/.test(value)) {
    return 'street address';
  }
  if (/\w+\s+\w+\s+\w+\w+\s/.test(value)) {
    return 'long text';
  }
  if (/\w+\s+\w+\s+\w+/.test(value)) {
    return 'short text';
  }
  if (/^\w+$/.test(value)) {
    return 'word';
  }

  return 'underfind'
};