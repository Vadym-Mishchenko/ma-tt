import input from './api/example.json'
import { checkType } from './checkType';

import './App.scss';

function App() {
  const data = JSON.parse(JSON.stringify(input));

  return (
    <div className="app">
      <h1>Web app to convert one json to another json file</h1>
      <div className="app__container">
        <div className="app__output">
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title-value">value</p>
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
        <div className="app__output">
          <div className="app__title-container">
            <p className="app__title">key</p>
            <p className="app__title-value">converted value</p>
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
