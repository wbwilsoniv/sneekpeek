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
    this.deleteSneaker = this.deleteSneaker.bind(this);
    this.showAddSneaker = this.showAddSneaker.bind(this);
    this.showBrandClick = this.showBrandClick.bind(this);
    this.showSneakersClick = this.showSneakersClick.bind(this);
    this.showEdit = this.showEdit.bind(this);
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
      pic_url: sneaker.pic_url
    });
  }

  // Click handler to change current view to Sneakers
  showSneakersClick() {
    this.setState({
      currentView: "Sneaker Index"
    });
  }

  // Click handler to change current view to Brands
  showBrandClick() {
    this.setState({
      currentView: "Brand Index"
    });
  }

  // click handler to change current view to Add New
  showAddSneaker() {
    this.setState({
      currentView: "Add New"
    });
  }

  // click handler to change current view to Edit
  showEdit() {
    this.setState({
      currentView: "Edit"
    });
  }

  viewController() {
    const { currentView, isLoading, brands, sneakers } = this.state;

    if (isLoading) {
      return (
        <div className="container">
          <Loader />
        </div>
      );
    }
    switch (currentView) {
      case "Sneaker Index":
        return <SneakerIndex sneakers={sneakers} />;
      case "Brand Index":
        return <BrandIndex brands={brands} />;
      case "Add New":
        return (
          <CreateSneaker
            model={this.state.model}
            price={this.state.price}
            release_date={this.state.release_date}
            brand_id={this.state.brand_id}
            pic_url={this.state.pic_url}
            onSubmit={this.createSneaker}
            handleSneakSubmit={this.handleSneakSubmit}
            handleChange={this.handleChange}
          />
        );
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
      default:
        return <SneakerIndex sneakers={sneakers} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <NavButtons handleAddSneaker={this.handleAddSneaker}/> */}
        <div className="navBtnDiv">
          <div onClick={this.showSneakersClick}>SNEAKERS</div>
          <div onClick={this.showBrandClick}>BRANDS</div>
          <div onClick={this.showAddSneaker}>ADD SNEAKER</div>
        </div>
        {this.viewController()}
      </div>
    );
  }
}

export default App;
