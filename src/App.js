import React from "react";
import "./App.css";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          title
        </a>
        <Home/>
      </header>
    </div>
  );
}

export default App;
