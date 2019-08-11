import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FooterLinks from './FooterLinks';

class Footer extends Component {
  constructor() {
    super();
    this.data = [{
      'title': 'Features',
      'link': [
        { 'title': 'Cool stuff', 'link': '#' },
        { 'title': 'Random feature', 'link': '#' },
        { 'title': 'Team feature', 'link': '#' },
        { 'title': 'Stuff for developers', 'link': '#' },
        { 'title': 'Another one', 'link': '#' },
        { 'title': 'Last time', 'link': '#' }
      ]
    },
    {
      'title': 'Resources',
      'link': [
        { 'title': 'Resource', 'link': '#' },
        { 'title': 'Resource name', 'link': '#' },
        { 'title': 'Another resource', 'link': '#' },
        { 'title': 'Final resource', 'link': '#' }
      ]
    },
    {
      'title': 'About',
      'link': [
        { 'title': 'Team', 'link': '#' },
        { 'title': 'Locations', 'link': '#' },
        { 'title': 'Privacy', 'link': '#' },
        { 'title': 'Terms', 'link': '#' }
      ]
    }];
  }

  render() {
    let footer = this.data.map((data, index) => <FooterLinks key={index} linkData={data} />);
    return (
      <div className="container">
        <div className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
            <img className="mb-2" src="" alt="" width="24" height="24" />
            <small className="d-block mb-3 text-muted">&copy; 2017-</small>
          </div>
            {footer}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;