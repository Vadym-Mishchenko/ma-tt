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
    </div>
  );
}

export default App;
