import React, { Component } from 'react';

class AvailableTransforms extends Component {
  handleAvailableClick(e){
    console.log(this.props.transforms);
  }
    render() {
        return (
          <div>
            <button type="button" onClick={this.handleAvailableClick.bind(this)}>{this.props.transforms.action}</button>
          </div>
        );
    }
}

export default AvailableTransforms;
