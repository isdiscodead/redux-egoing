import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import AddNumberRoot from './Components/AddNumberRoot';
import DisplayNumberRoot from './Components/DisplayNumberRoot';


function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
