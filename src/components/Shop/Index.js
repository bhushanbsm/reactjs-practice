import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

class Shop extends Component {

  constructor() {
    super();
    this.state = { loading: true, cards: [] };
    this.cardsTag = [];
  }

  render() {
    if (this.state.loading) {
      return (<p>Loading please wait!</p>);
    }

    return (
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {this.cardsTag}
          </div>
        </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        this.cardsTag = json.slice(0,12).map((value, index) => <Card key={index} cardData={value} />);
      })
      .then(() => this.setState({ loading: false }))
  }
}

export default Shop;