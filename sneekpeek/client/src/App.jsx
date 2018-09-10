import React, { Component } from 'react';
import { fetchSneakers, saveSneaker, updateSneaker, deleteSneaker } from './services/api';
import SneakerIndex from './components/SneakerIndex';
// import SneakerDetails from './components/SneakerDetails';
import BrandIndex from './components/BrandIndex';
import './App.css';
import CreateSneaker from './components/CreateSneaker';
// import EditSneaker from './components/EditSneaker';
import Header from './components/Header';
import axios from 'axios';
// import ViewContainer from './components/ViewContainer';
import SneakerDetails from './components/SneakerDetails';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      brands: [],
      selectedSneaker: [{}],
      sneakerSelected: false
    }
    this.createSneaker = this.createSneaker.bind(this);
    this.updateSneaker = this.updateSneaker.bind(this);
    this.showSneaker = this.showSneaker.bind(this);
    this.deleteSneaker = this.deleteSneaker.bind(this);
    this.getSneaker = this.getSneaker.bind(this);
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
  
  selectSneaker(evt) {
    console.log(evt.target);
    // this.setState({
    //   sneakerDetails: evt.target,
    // });
  }
  getSneaker(id) {
    axios.get(`http://localhost:3001/sneaker/${id}.json`)
    .then(resp => {
      console.log(resp)
      this.setState({
        selectedSneaker: resp.data
      })
    })
    .catch(err => console.log(err))
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
  showSneaker(sneaker) {
    this.setState({
      selectedSneaker: sneaker
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BrandIndex brands={this.state.brands}/>
      {/* <EditSneaker sneaker={this.state.selectedSneaker} onSubmit={this.updateSneaker}/> */}
        {/* <ViewContainer sneakerSelected={this.state.sneakerSelected} /> */}
      <SneakerIndex sneakers={this.sneakers} />
      <CreateSneaker onSubmit={this.createSneaker} />
      <SneakerDetails sneaker={this.state.selectedSneaker} />
      {/* <SneakerDetails sneaker={this.state.sneakerDetails} /> */}
      </div>
    );
  }
}

export default App;
