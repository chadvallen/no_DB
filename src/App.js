import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fortune: 'Fortune...'
    }
  }

  fetchFortune() {
    axios.get('/data').then(res => {
      this.setState({
        fortune: res.data
      })
    }).catch(error => {
      console.log("Error", error)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Fortune Teller</h1>
        <button onClick={() => this.fetchFortune()}>Fetch</button>
        <p>{this.state.fortune}</p>
      </div>
    );
  }
}

export default App;
