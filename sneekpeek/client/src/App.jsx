import React, { Component } from 'react';
// import { fetchSneakers, fetchOneSneaker } from './services/api';
import SneakerIndex from './components/SneakerIndex';
import SneakerDetails from './components/SneakerDetails';
import BrandIndex from './components/BrandIndex';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      brands: [],
      sneakerDetails: [{}],
    }
  }
  render() {
    return (
      <div className="App">
      <BrandIndex brands={this.state.brands}/>
      <SneakerIndex />
      <SneakerDetails sneaker={this.state.sneakerDetails} />
      </div>
    );
  }
}

export default App;
