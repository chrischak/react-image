import React, { Component } from 'react';

class AppliedTransforms extends Component {
    render() {
        return (
          <div>
            <button type="button">{this.props.transforms.action}</button>
          </div>
        );
    }
}

export default AppliedTransforms;
