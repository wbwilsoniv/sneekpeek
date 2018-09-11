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
import EditSneaker from './components/EditSneaker';
import NavButtons from './components/NavButtons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      brands: [],
      sneaker: '',
      selectedSneaker: [{}],
      sneakerToEdit: '',
      currentView: ''
    }
    this.createSneaker = this.createSneaker.bind(this);
    this.updateSneaker = this.updateSneaker.bind(this);
    this.showSneaker = this.showSneaker.bind(this);
    this.deleteSneaker = this.deleteSneaker.bind(this);
    this.getSneaker = this.getSneaker.bind(this);
    this.handleAddSneaker = this.handleAddSneaker.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
    this.handleSneakersClick = this.handleSneakersClick.bind(this);
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
  
  handleAddSneaker() {
    this.setState({
      currentView: 'Add Form'
    });
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

  handleSneakClick(id) {
    axios.get(`http://localhost:3001/sneaker/${id}.json`)
    .then(resp => {
      this.setState({ sneaker: resp.sneaker[0] });
    });
  }

  handleEditSneaker(sneaker) {
    this.setState({
      sneakerToEdit: sneaker,
      model: sneaker.model,
      price: sneaker.price,
      release_date: sneaker.release_date,
      brand_id: sneaker.brand_id,
      sneak_pic: sneaker.sneak_pic
    });
  }

  handleSneakersClick() {
    this.setState({
      currentView: 'Sneaker Index'
    });
  }

  handleBrandClick() {
    this.setState({
      currentView: 'Brand Index'
    });
  }

  viewController() {
    const { currentView } = this.state;
    switch (currentView) {
      case 'Sneaker Index':
        return <SneakerIndex sneakers={this.state.sneakers} />
      break;
      case 'Brand Index':
        return <BrandIndex brands={this.state.brands} />
      break;
      case 'Add New':
        return <CreateSneaker
          model={this.state.model}
          price={this.state.price}
          release_date={this.state.release_date}
          brand_id={this.state.brand_id} 
          sneak_pic={this.state.sneak_pic}
          handleSneakSubmit={this.handleSneakSubmit}
          handleChange={this.handleChange}/>
        break;
      case 'Edit':
        return <EditSneaker
          model={this.state.model}
          price={this.state.price}
          release_date={this.state.release_date}
          brand_id={this.state.brand_id} 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}/>
        break;
      default:
        return <SneakerIndex sneakers={this.state.sneakers} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavButtons handleAddSneaker={this.handleAddSneaker}/>
        <button onClick={this.handleSneakersClick}>Sneakers</button>
        <button onClick={this.handleBrandClick}>Show Brands</button>
        {/* <button onClick={this.handleAddSneaker}>Add New</button>
      <EditSneaker sneaker={this.state.selectedSneaker} onSubmit={this.updateSneaker}/> */}
        {/* <ViewContainer sneakerSelected={this.state.sneakerSelected} /> */}
      {/* <SneakerIndex sneakers={this.sneakers} handleSneakClick={this.handleSneakClick}/>
      <CreateSneaker onSubmit={this.createSneaker} />
      <BrandIndex brands={this.state.brands}/>
      <SneakerDetails sneaker={this.state.selectedSneaker} /> */}
      {/* <SneakerDetails sneaker={this.state.sneakerDetails} /> */}
      {this.viewController()}
      </div>
    );
  }
}

export default App;
