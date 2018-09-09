import React, { Component } from 'react';
import { fetchOneSneaker } from './../services/api';

class EditSneaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: this.props.sneaker.model,
      price: this.props.sneaker.price,
      release_date: this.props.sneaker.release_date,
      brand_id: this.props.sneaker.brand_id,
      id: this.props.sneaker.id
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }
  
  getOneSneaker(sneaker) {
    fetchOneSneaker(sneaker)
      .then(data => {
        this.setState({
          selectedSneaker: data
        });
      })
  }
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
        name: this.state.title,
        price: this.state.price,
        release_date: this.state.release_date,
        brand_id: this.state.brand_id,
        id: this.state.id
      }
    this.props.onSubmit(data);
    
  }

  delete(evt) {
      evt.preventDefault();
      this.props.delete(this.state.id);
  }

  render(){
      return (
          <div>
              <div className="createSneakerFormDiv">
                <h3>Edit Sneaker</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Model:</label>
                    <br />
                    <input
                        type="text"
                        name="model"
                        required="required"
                        value={this.state.model}
                        onChange={this.handleChange}
                        placeholder="Model"
                    />
                    <br />
                    <label>Price:</label>
                    <br />
                    <input
                        type="number"
                        name="price"
                        required="required"
                        value={this.state.price}
                        onChange={this.handleChange}
                        placeholder="Price"
                    />
                    <br />
                    <label>Release Date:</label>
                    <br />
                    <input
                        type="text"
                        name="release_date"
                        required="required"
                        value={this.state.release_date}
                        onChange={this.handleChange}
                        placeholder="Release Date"
                    />
                    <br />
                    <label>Brand:</label>
                    <br />
                    <select
                        name="brand_id"
                        onChange={this.handleChange}
                        required="required">
                        <option value="" disabled selected hidden>Select Brand</option>
                        <option value="1">Adidas</option>
                        <option value="2">Jordan</option>
                        <option value="3">Nike</option>
                    </select>
                    <br />
                    <button type="submit" value="Edit Sneaker">Save Changes</button>
                    <button onClick={this.delete} className="deletebtn">Delete</button>
                </form>
            </div>
          </div>
      )
  } 

}

export default EditSneaker;