import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer.js'
import './App.css';

class App extends Component {
  constructor() {
    super();

  }

  render() {


    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
