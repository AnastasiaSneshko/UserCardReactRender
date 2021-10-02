import React, { Component } from 'react';
import "./linkWrapper.modules.scss"

class LinkWrapper extends Component {
  render() {
    return (
      <div className="linkWrapper">
        <a className="social" href="https://www.facebook.com/">F</a>
        <a className="social" href="https://www.twitter.com/">T</a>
        <a className="social" href="https://www.linkedin.com/">L</a>
        <a className="social" href="https://www.google.com/">G</a>
        <a className="social" href="https://www.dribbble.com/">D</a>
      </div>
    );
  }
}

export default LinkWrapper;
