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
    console.log(file);

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
      $imagePreview = (<img src={imagePreviewUrl} alt={fileName}/>);
    }
    return(
      <div>
          <h1>Load A Photo</h1>
          <input type="file" id="the-photo-file-field" onChange={this.handleAddImage.bind(this)} />
          {$imagePreview}
      </div>
    )
  }
}

export default AddImage;
