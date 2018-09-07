import React, { Component } from 'react';
import { fetchSneakers, saveSneaker } from './services/api';
import SneakerIndex from './components/SneakerIndex';
import SneakerDetails from './components/SneakerDetails';
import BrandIndex from './components/BrandIndex';
import './App.css';
import CreateSneaker from './components/CreateSneaker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      brands: [],
      sneakerDetails: [{}],
    }
    this.createSneaker = this.createSneaker.bind(this);
  }

  createSneaker(sneaker) {
    saveSneaker(sneaker)
    .then(data => {
      fetchSneakers()
        .then(data => this.setState({ sneakers: data }));
    })
  }

  render() {
    return (
      <div className="App">
      <CreateSneaker onSubmit={this.createSneaker} />
      <BrandIndex brands={this.state.brands}/>
      <SneakerIndex />
      <SneakerDetails sneaker={this.state.sneakerDetails} />
      </div>
    );
  }
}

export default App;
