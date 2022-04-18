import { useState } from 'react';
import input from './api/example.json'
import { checkType } from './checkType';

import './App.scss';

const convertJSON = (input) => {
  return Object.entries(input).reduce((obj, [key, value]) => {
    return {
      ...obj,
      [key]: checkType(value),
    }
  }, {})
};

function App() {
  const [inputJSON, setInputJSON] = useState(input);
  const [convertedJSON, setConvertedJSON] = useState(convertJSON(input));

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const JSONParsed = JSON.parse(e.target.result);
      setInputJSON(JSONParsed);
      setConvertedJSON(convertJSON(JSONParsed));
    };
  };

  const outputData = (value) => {
    if (typeof value === 'boolean') {
      return JSON.stringify(value);
    }
    if (typeof value === 'object') {
      return JSON.stringify(value);
    } else {
      return value;
    }
  };

  return (
    <div className="app">
      <h1 className="app__main-title">Web app to convert one json to another json file</h1>
      <input
        className="app__download-file"
        type="file"
        onChange={handleChange}
      />
      <div className="app__container">
        <div className="app__output">
          <h2>Input JSON</h2>
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title-value">value</p>
          </div>
          {Object.entries(inputJSON).map(([key, value]) => {
            return (
              <div key={key} className="app__list-container">
                <p className="app__list-key">{`${key}:`}</p>
                <p className="app__list-value">{outputData(value)}</p>
              </div>
            )
          })}
        </div>
        <div className="app__output">
          <h2>Output JSON</h2>
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title-value">converted value</p>
          </div>
          {Object.entries(convertedJSON).map(([key, value]) => {
            return (
              <div key={key} className="app__list-container">
                <p className="app__list-key">{`${key}:`}</p>
                <p className="app__list-value">{value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
