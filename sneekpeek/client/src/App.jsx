import React, { Component } from 'react';
// import { fetchSneakers, fetchOneSneaker } from './services/api';
import SneakerIndex from './components/SneakerIndex';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      brands: []
    }
  }
  render() {
    return (
      <div className="App">
      <SneakerIndex />
      </div>
    );
  }
}

export default App;
