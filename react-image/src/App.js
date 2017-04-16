import React, { Component } from 'react';
import AddImage from './Components/AddImage';
import TransformImage from './Components/TransformImage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddImage />
        <TransformImage />
      </div>
    );
  }
}

export default App;
