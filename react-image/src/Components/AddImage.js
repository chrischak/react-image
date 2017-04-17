import React, { Component } from 'react';

class AddImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      fileName: '',
      imagePreviewUrl: ''
    };
    this.handleAddImage = this.handleAddImage.bind(this);
  }

  handleAddImage(e){
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("photo file has been chosen");

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render(){
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      let {fileName} = this.state.file.name;
      $imagePreview = (<img src={imagePreviewUrl} alt={fileName} style={this.props.imgStyle} />);
    }
    return(
      <div className="col-xs-6 col-sm-4">
          <h1>Choose An Image</h1>
          <div className="imagePreview">
            {$imagePreview}
          </div>
          <input type="file" className="btn btn-default btn-bottom" id="the-photo-file-field" onChange={this.handleAddImage.bind(this)} />
      </div>
    )
  }
}

export default AddImage;
