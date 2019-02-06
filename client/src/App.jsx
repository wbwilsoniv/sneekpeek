import React, { Component } from "react";
import {
  fetchSneakers,
  saveSneaker,
  updateSneaker,
  deleteSneaker
} from "./services/api";
import SneakerIndex from "./components/SneakerIndex";
import BrandIndex from "./components/BrandIndex";
import "./App.css";
import CreateSneaker from "./components/CreateSneaker";
import EditSneaker from "./components/EditSneaker";
import Header from "./components/Header";
import Loader from "./components/Loader";
// import axios from 'axios';
// import ViewContainer from './components/ViewContainer';
import SneakerDetails from "./components/SneakerDetails";
import NavButtons from "./components/NavButtons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      sneakers: [],
      brands: [],
      sneaker: "",
      sneakerToEdit: {},
      currentView: ""
    };
    this.createSneaker = this.createSneaker.bind(this);
    this.updateSneaker = this.updateSneaker.bind(this);
    // this.getSneaker = this.getSneaker.bind(this);
    this.deleteSneaker = this.deleteSneaker.bind(this);
    this.handleAddSneaker = this.handleAddSneaker.bind(this);
    this.handleBrandClick = this.handleBrandClick.bind(this);
    this.handleSneakersClick = this.handleSneakersClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    fetchSneakers().then(data =>
      this.setState({ isLoading: false, sneakers: data })
    );
  }

  // Create sneaker function
  createSneaker(sneaker) {
    saveSneaker(sneaker).then(data => {
      fetchSneakers().then(data => this.setState({ sneakers: data }));
    });
  }

  // Update Sneaker
  updateSneaker(sneaker) {
    updateSneaker(sneaker).then(data => {
      fetchSneakers().then(data =>
        this.setState({
          sneakers: data
        })
      );
    });
  }

  // Get Sneaker function
  // getSneaker(id) {
  //   axios.get(`http://localhost:3001/sneakers/${id}.json`)
  //   .then(data => {
  //     this.setState({
  //       sneakerToEdit: data
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  // Delete Sneaker function
  deleteSneaker(id) {
    deleteSneaker(id).then(data => {
      fetchSneakers().then(data =>
        this.setState({
          sneakers: data,
          brands: []
        })
      );
    });
  }

  // WIP event handler for edit form
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

  // Click handler to change current view to Sneakers
  handleSneakersClick() {
    this.setState({
      currentView: "Sneaker Index"
    });
  }

  // Click handler to change current view to Brands
  handleBrandClick() {
    this.setState({
      currentView: "Brand Index"
    });
  }

  // click handler to change current view to Add New
  handleAddSneaker() {
    this.setState({
      currentView: "Add New"
    });
  }

  // click handler to change current view to Edit
  handleEdit() {
    this.setState({
      currentView: "Edit"
    });
  }

  viewController() {
    const { currentView } = this.state;
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      switch (currentView) {
        case "Sneaker Index":
          return <SneakerIndex sneakers={this.state.sneakers} />;
          break;
        case "Brand Index":
          return <BrandIndex brands={this.state.brands} />;
          break;
        case "Add New":
          return (
            <CreateSneaker
              model={this.state.model}
              price={this.state.price}
              release_date={this.state.release_date}
              brand_id={this.state.brand_id}
              sneak_pic={this.state.sneak_pic}
              onSubmit={this.createSneaker}
              handleSneakSubmit={this.handleSneakSubmit}
              handleChange={this.handleChange}
            />
          );
          break;
        case "Edit":
          return (
            <EditSneaker
              sneaker={this.state.sneakerToEdit}
              model={this.state.model}
              price={this.state.sneaker.price}
              release_date={this.state.sneaker.release_date}
              brand_id={this.state.sneaker.brand_id}
              handleEditSneaker={this.handleEditSneaker}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              onSubmit={this.updateSneaker}
            />
          );
          break;
        default:
          return <SneakerIndex sneakers={this.state.sneakers} />;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <NavButtons handleAddSneaker={this.handleAddSneaker}/> */}
        <div className="navBtnDiv">
          <h4 onClick={this.handleSneakersClick}>SNEAKERS</h4>
          <h4 onClick={this.handleBrandClick}>BRANDS</h4>
          <h4 onClick={this.handleAddSneaker}>ADD SNEAKER</h4>
        </div>
        {this.viewController()}
      </div>
    );
  }
}

export default App;
