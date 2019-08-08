import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './pricing.css';
import Header from './Header';
import Offer from './Offer';

class Price extends Component {

  constructor() {
    super();
    this.data = [{
        title: 'Free',
        amount: 0,
        users: 10,
        storage: 2,
        type: 1
      },
      {
        title: 'Pro',
        amount: 15,
        users: 20,
        storage: 10,
        type: 2
      },
      {
        title: 'Enterprise',
        amount: 29,
        users: 30,
        storage: 15,
        type: 3
      }
    ];
  }

  render() {
    let offerLinks = this.data.map((item, index) => (
      <Offer key={index} offer={item} />
    ));

    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {offerLinks}
          </div>
        </div>
      </div>
    );
  }
}

export default Price;