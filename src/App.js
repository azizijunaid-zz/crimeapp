import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Crime from './screens/Crime';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Crime />
      </div>
    );
  }
}

export default App;
