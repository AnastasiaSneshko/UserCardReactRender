import React, { Component } from 'react';
import "./imgWrapper.scss"

class ImgWrapper extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render() {
    const {imgSrc, fullName} = this.props;
    return (
      <div className="imgWrapper">
        <img className="img" src={imgSrc} alt={fullName} />
      </div>
    );
  }
}

export default ImgWrapper;
