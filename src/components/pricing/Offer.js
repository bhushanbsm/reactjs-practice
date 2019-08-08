import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './pricing.css';

class Offer extends Component {

  render() {
    let email = this.props.offer.type == 2 ? 'Priority email' : this.props.offer.type == 3 ? 'Phone and email' : 'Email';
    let btnTitle = this.props.offer.type == 2 ? 'Get Started' : this.props.offer.type == 3 ? 'Contact us' : 'Sign up for free';
    let btnClass = 'btn-primary';
    if (this.props.offer.type == 1) {
      btnClass = 'btn-outline-primary';
    }

    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.offer.title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">${this.props.offer.amount} <small className="text-muted">/ mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>{this.props.offer.users} users included</li>
            <li>{this.props.offer.storage} GB of storage</li>
            <li>{email} support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className={"btn btn-lg btn-block " + btnClass}>{btnTitle}</button>
        </div>
      </div>
    );
  }
}

export default Offer;