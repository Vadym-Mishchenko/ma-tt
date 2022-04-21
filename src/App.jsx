import { useState } from 'react';
import { convertJSON } from './convertJSON';
import input from './api/example.json'

import './App.scss';

function App() {
  const [inputJSON, setInputJSON] = useState(input);
  const [convertedJSON, setConvertedJSON] = useState(convertJSON(input));
  const [error, setError] = useState(false);

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      try {
        const JSONParsed = JSON.parse(e.target.result);
        setInputJSON(JSONParsed);
        setConvertedJSON(convertJSON(JSONParsed));
        setError(false);
      } catch (err) {
        setError(true);
      }
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
        <h2 className="app__subtitle">Input JSON</h2>
        <h2 className="app__subtitle">Output JSON</h2>
      </div>
      <div className="app__container">
        <textarea
          className="app__area"
          value={!error ? JSON.stringify(inputJSON, 1, 2) : "Enter correct JSON"}
          name="input"
          cols="30"
          rows="10"
          readOnly
        />
        <textarea
          className="app__area"
          value={!error ? JSON.stringify(convertedJSON, 1, 2) : ''}
          name="input"
          cols="30"
          rows="10"
          readOnly
        />
      </div>
      <div className="app__container">
        <div className="app__output">
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title-value">value</p>
          </div>
          {!error ? Object.entries(inputJSON).map(([key, value]) => {
            return (
              <div key={key} className="app__list-container">
                <p className="app__list-key">{`${key}:`}</p>
                <p className="app__list-value">{outputData(value)}</p>
              </div>
            )
          }) : ''}
        </div>
        <div className="app__output">
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title-value">converted value</p>
          </div>
          {!error ? Object.entries(convertedJSON).map(([key, value]) => {
            return (
              <div key={key} className="app__list-container">
                <p className="app__list-key">{`${key}:`}</p>
                <p className="app__list-value">{value}</p>
              </div>
            )
          }) : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
