import React, { Component } from 'react';
import AddImage from './Components/AddImage';
import ImagePreview from './Components/ImagePreview';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        React Image
        <AddImage />
        <ImagePreview />
      </div>
    );
  }
}

export default App;
