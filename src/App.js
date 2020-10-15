import React, { useState } from 'react';
import React from 'react';
// import './App.css';

function App() {
  const [categories] = useState([
    {name: 'front', description: 'Exclusively Front End Projects'},
    { name: 'back', description: 'Exclusively Back End Projects'},
    { name: 'full', description: 'Front and Back End Projects'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
