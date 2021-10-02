import React, { Component } from 'react';
import LinkWrapper from '../LinkWrapper';
import ImgWrapper from './../imgWrapper';
import "./userCard.modules.scss"

class UserCard extends Component {
  render() {
    const { fullName, titleText, description } = this.props;
    return (
      <li className="cardWrapper">
        <article className="userCard">
          <ImgWrapper />
          <h2 className="cardName">{fullName}</h2>
          <p className="cardTitle">{titleText}</p>
          <p className="cardDescription">{description}</p>
          <LinkWrapper />
        </article>
      </li>
    );
  }
}

export default UserCard;
