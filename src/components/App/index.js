import React from 'react'
import Logo from './logo.svg'
import InlineSVG from 'react-inlinesvg';

import './styles.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InlineSVG className="App-logo" src={Logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
