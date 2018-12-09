import React, { Component } from 'react';
import logo from './logo.svg';
import SwitchDemo from './Switch';
import Navbar from './Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <SwitchDemo />
      </div>
    );
  }
}

export default App;
