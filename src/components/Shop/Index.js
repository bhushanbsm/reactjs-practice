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
      <div className="App">
        <div className="container">
          <div className="card-deck mb-3 text-center">
            {this.cardsTag}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        this.cards = json;
        this.setState({ loading: false});
      })
  }

  shouldComponentUpdate() {
    for(let index = 0; index <= 11; index++) {
      this.cardsTag[index] = (<Card key={index} cardData={this.cards[index]}></Card>);
    }
    // this.cardsTag = this.cards.map((card, index) => {
    //   if(index == 10) {
    //     break;
    //   }
    //   (<Card key={index} cardData={card}></Card>)
    // });
    return true;
  }
}

export default Shop;