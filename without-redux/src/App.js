import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { connect } from 'react-redux'

import AddNumberRoot from './Components/AddNumberRoot';
import DisplayNumberRoot from './Components/DisplayNumberRoot';


class App extends Component {

  state = {number : 0}

  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
 