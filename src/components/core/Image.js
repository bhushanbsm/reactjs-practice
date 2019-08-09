import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Image extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <img className="card-img-top" src={this.props.cardData.thumbnailUrl} alt="Card image cap" />
    );
  }
}

export default Footer;