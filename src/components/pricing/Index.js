import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './pricing.css';
import Header from './Header';
import Offer from './Offer';

function Price() {
  let data = {
    free : {
      title : 'Free',
      amount : 0,
      users : 10,
      storage : 2,
      type : 1
    },
    pro : {
      title : 'Pro',
      amount : 15,
      users : 20,
      storage : 10,
      type : 2
    },
    enterprise : {
      title : 'Enterprise',
      amount : 29,
      users : 30,
      storage : 15,
      type : 3
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <Offer offer={data.free} />
          <Offer offer={data.pro} />
          <Offer offer={data.enterprise} />
        </div>
      </div>
    </div>
  );
}

export default Price;