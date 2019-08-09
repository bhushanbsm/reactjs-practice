import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Price from './components/pricing/Index';
<<<<<<< HEAD
=======
import Shop from './components/Shop/Index';
>>>>>>> 3970875dad7573875da31d914a786f18631b57a1

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
<<<<<<< HEAD
        <Price></Price>
=======
        {/* <Price></Price> */}
        <Shop />
>>>>>>> 3970875dad7573875da31d914a786f18631b57a1
        <Footer></Footer>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
