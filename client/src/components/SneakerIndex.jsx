import React, { Component } from "react";
// import axios from 'axios';
import EditSneaker from "./EditSneaker";
import SneakerDetails from "./SneakerDetails";
import { fetchSneakers, updateSneaker, deleteSneaker } from "../services/api";

class SneakerIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: [],
      sneakerToEdit: {},
      sneakerSelected: null
    };
    this.toggleSneakerSelected = this.toggleSneakerSelected.bind(this);
    this.updateSneaker = this.updateSneaker.bind(this);
    this.deleteSneaker = this.deleteSneaker.bind(this);
  }

  // gets all and sets state for Sneakers
  //     const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';
  //     componentDidMount() {
  //     // axios.get('http://localhost:3001/sneakers.json')
  //     fetchSneakers()
  //     .then(resp => {
  //         this.setState({
  //             sneakers: resp.data,
  //         })
  //     })
  //     .catch(err => console.log(err))
  // }

  componentDidMount() {
    fetchSneakers().then(data => this.setState({ sneakers: data }));
  }

  // handles click and sets state for sneaker edit
  // changes boolean value for sneakerSelected. to be used for conditional render.
  // WIP currently sets last item in sneakers as sneaker to edit no matter what button is clicked.
  toggleSneakerSelected(e) {
    const editsneaker = this.state.sneakers.filter(
      sneaker => sneaker.id === parseInt(e.target.value)
    );
    debugger;
    this.setState({
      sneakerToEdit: editsneaker[0],
      sneakerSelected: true
    });
  }

  // props.handle
  // 3 functions => fetch call for edit => change state (toggle editButton selectedSneaker) => (props.selectedsneaker)

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
          sneakers: data
        })
      );
    });
  }

  // shows brand name instead of brand_id for sneaker
  renderBrand(brand_id) {
    switch (brand_id) {
      case 1:
        return "Adidas";
        break;
      case 2:
        return "Jordan";
        break;
      case 3:
        return "Nike";
        break;
      default:
        return null;
    }
  }

  render() {
    let sneakers = [this.state.sneakers];
    let sneakerSelected = this.state.sneakerSelected;
    if (sneakerSelected === true) {
      return (
        <EditSneaker
          sneaker={this.state.sneakerToEdit}
          onSubmit={this.updateSneaker}
          delete={this.deleteSneaker}
        />
      );
    } 
      return (
        <div className="sneakerContainer">
          {this.state.sneakers.map(sneaker => {
            return (
              <div className="single-sneaker" key={sneaker.id}>
                <h4 className="sneakerBrand">
                  {this.renderBrand(sneaker.brand_id)}
                </h4>
                <h4 className="sneakerHeading">{sneaker.model}</h4>
                <img
                  className="sneakerPic"
                  src={sneaker.pic_url}
                  alt="picture of sneaker"
                />
                <span className="sneakerPrice">${sneaker.price} (USD)</span>
                <span className="sneakerRelease">
                  Release Date: <br /> {sneaker.release_date}
                </span>
                <span className="editBtn">
                  <button
                    type="button"
                    value={sneaker.id}
                    onClick={e => this.toggleSneakerSelected(e)}
                  >
                    Edit Sneaker
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      );
    
  }
}

export default SneakerIndex;
