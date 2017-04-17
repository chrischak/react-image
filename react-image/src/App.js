import React, { Component } from 'react';
import TransformImage from './Components/TransformImage';
import './App.css';

var TRANSFORMS = [
  {
    action:'Rotate',
    apply:false,
    css: {
      'transform':'rotate(45deg)'
    }
  },
  {
    action:'Translate',
    apply:false,
    css: {
     'transform':'translateX(-40px)'
    }
  },
  {
    action:'Opacity',
    apply:false,
    css: {
      'opacity': '0.5'
    }
  },
  {
    action:'Scale',
    apply:false,
    css: {
     'transform':'scale(0.5,0.5)'
    }
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <TransformImage transforms={TRANSFORMS}/>
      </div>
    );
  }
}

export default App;
