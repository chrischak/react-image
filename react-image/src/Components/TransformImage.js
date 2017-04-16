import React, { Component } from 'react';
import AppliedTransforms from './AppliedTransforms';

class TransformImage extends Component {
  constructor(){
    super();
    this.state={
      transforms:[
        {
          action:'Rotate',
          apply:false
        },
        {
          action:'Translate',
          apply:false
        },
        {
          action:'Opacity',
          apply:false
        },
        {
          action:'Scale',
          apply:true
        },
      ]
    }
  }
  handleAvailableClick(id) {
    let transforms = this.state.transforms;
    let index = transforms.findIndex(x => x.action === id);
    transforms[index].apply = true;
    this.setState({transforms:transforms})
  }

  handleAppliedClick(id) {
    let transforms = this.state.transforms;
    let index = transforms.findIndex(x => x.action === id);
    transforms[index].apply = false;
    this.setState({transforms:transforms})
  }

  render() {
    let availableTransforms = [];
    let appliedTransforms = [];
    let transforms = this.state.transforms;

    if(transforms){
      transforms.forEach( function(action, i){
        if(action.apply){
          appliedTransforms.push(
            <button type="button" key={action.action} onClick={this.handleAppliedClick.bind(this, action.action)}>{action.action}</button>
          );
        }else{
          availableTransforms.push(
            <button type="button" key={action.action} onClick={this.handleAvailableClick.bind(this, action.action)}>{action.action}</button>
          );
        }
      }.bind(this));
    }
      return (
        <div>
          <h3>Available Actions</h3>
          <br/>
          {availableTransforms}

          <h3>Applied Actions</h3>
          <br/>
          {appliedTransforms}
        </div>
      );
  }
}

export default TransformImage;
