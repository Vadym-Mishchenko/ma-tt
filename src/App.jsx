import input from './api/example.json'

import './App.scss';


function App() {
  let data = JSON.parse(JSON.stringify(input));

  const checkType = (value) => {
    if (Array.isArray(value)) {
      return 'array';
    }
    if (typeof value === 'object') {
      return 'dictionary';
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

  return (
    <div className="app">
      <h1>Web app to convert one json to another json file</h1>
      <div className="app__container">
        <div className="app__input">
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title">value</p>
          </div>
          {Object.entries(data).map(([key, value]) => {
            return (
              <div key={key} className="app__list-container">
                <p className="app__list-key">{`${key}:`}</p>
                <p className="app__list-value">{`${value}`}</p>
              </div>
            )
          })}
        </div>
        <button
          className="app__btn"
        >
          Convert
        </button>
        <div className="app__output">
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title">converted value</p>
          </div>
          {Object.entries(data).map(([key, value]) => {
            return (
              <div key={key} className="app__list-container">
                <p className="app__list-key">{`${key}:`}</p>
                <p className="app__list-value">{`${checkType(value)}`}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
