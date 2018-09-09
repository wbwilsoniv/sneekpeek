import React, { Component } from 'react';
import { fetchSneakers, saveSneaker, updateSneaker, deleteSneaker } from './services/api';
import SneakerIndex from './components/SneakerIndex';
import SneakerDetails from './components/SneakerDetails';
import BrandIndex from './components/BrandIndex';
import './App.css';
import CreateSneaker from './components/CreateSneaker';
import EditSneaker from './components/EditSneaker';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      brands: [],
      sneakerDetails: [{}],
    }
    this.createSneaker = this.createSneaker.bind(this);
    this.updateSneaker = this.updateSneaker.bind(this);
    this.deleteSneaker = this.deleteSneaker.bind(this);
  }

  createSneaker(sneaker) {
    saveSneaker(sneaker)
    .then(data => {
      fetchSneakers()
        .then(data => this.setState({ sneakers: data }));
    })
  }

  updateSneaker(sneaker) {
    updateSneaker(sneaker)
    .then(data => {
      this.setState({
        sneakerDetails: [data]
      })
      fetchSneakers()
      .then(data => this.setState({
        sneakers: data
      }));
    });
  }

  deleteSneaker(id) {
    deleteSneaker(id)
      .then(data => {
        fetchSneakers()
          .then(data => this.setState({
            sneakers: data,
            brands: [],
            sneakerDetails: [{}],
          }));
      });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <BrandIndex brands={this.state.brands}/>
          <header/>>
      {/* <EditSneaker sneaker={this.state.selectedSneaker} onSubmit={this.updateSneaker}/> */}
      
      <SneakerIndex />
      <CreateSneaker onSubmit={this.createSneaker} />
      <SneakerDetails sneaker={this.state.sneakerDetails} />
      </div>
    );
  }
}

export default App;
