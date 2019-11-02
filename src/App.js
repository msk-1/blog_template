import React from "react";
import "./App.css";
import Home from './components/Home';
import Content from './components/Content'

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
        <Content />
      </header>
    </div>
  );
}

export default App;
