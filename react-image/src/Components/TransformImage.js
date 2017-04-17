import React, { Component } from 'react';
import AddImage from './AddImage';

class TransformImage extends Component {
  constructor(props){
    super(props);
      this.state = {
        divStyle:[],
        imgStyle:{}
      }
  }

  getStyle(index){
    let divStyle = index;
    let transforms = this.props.transforms;
    let imgStyle = {};
    if (divStyle.length > 0){
      if(transforms){
        transforms.forEach( function(action, i){
          if(divStyle.indexOf(i) !== -1){
            if(Object.keys(imgStyle).length > 0 && Object.keys(imgStyle).indexOf(Object.keys(action.css)[0]) !== -1){
              let tmpKey = Object.keys(action.css)[0];
              let tmpStyle = {};
              tmpStyle[tmpKey] = action.css[tmpKey] + ' ' + imgStyle[tmpKey]
              Object.assign(imgStyle,tmpStyle)
            }else {
              Object.assign(imgStyle,action.css)
            }
          }
        });
      }
    }
    this.setState({imgStyle:imgStyle});
  }

  handleAvailableClick(id) {
    let transforms = this.props.transforms;
    let divStyle = this.state.divStyle;
    let index = transforms.findIndex(x => x.action === id);
    divStyle.push(index)
    transforms[index].apply = true;
    this.setState({divStyle:divStyle});
    this.setState({transforms:transforms})
    this.getStyle(divStyle);
  }

  handleAppliedClick(id) {
    let transforms = this.props.transforms;
    let divStyle = this.state.divStyle;
    let index = transforms.findIndex(x => x.action === id);
    let imgStyle = divStyle.filter(value => value !== index);
    transforms[index].apply = false;
    this.setState({divStyle:imgStyle});
    this.setState({transforms:transforms})
    this.getStyle(imgStyle);
  }

  handleReset(){
    let transforms = this.props.transforms;
    if(transforms){
      transforms.forEach( function(action, i){
        transforms[i].apply = false;
      });
    }
    this.setState({divStyle:[]});
    this.setState({imgStyle:{}})
  }

  render() {
    let availableTransforms = [];
    let appliedTransforms = [];
    let transforms = this.props.transforms;

    if(transforms){
      transforms.forEach( function(action, i){
        if(action.apply){
          appliedTransforms.push(
            <button type="button" className="btn btn-default" key={action.action} onClick={this.handleAppliedClick.bind(this, action.action)}>{action.action}</button>
          );
        }else{
          availableTransforms.push(
            <button type="button" className="btn btn-default" key={action.action} onClick={this.handleAvailableClick.bind(this, action.action)}>{action.action}</button>
          );
        }
      }.bind(this));
    }
      return (
        <div className="row is-flex">
            <AddImage imgStyle={this.state.imgStyle}/>

            <div className="col-xs-6 col-sm-4">
              <h3>Available Actions</h3>
              <br/>
              {availableTransforms}
            </div>

            <div className="col-xs-6 col-sm-4">
              <h3>Applied Actions</h3>
              <br/>
              {appliedTransforms}
              <br/>
              <button type="button" className="btn btn-default btn-bottom" onClick={this.handleReset.bind(this)}>Reset</button>
            </div>

        </div>
      );
  }
}

export default TransformImage;
