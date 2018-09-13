import React, { Component } from 'react';

class EditSneaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      model: this.props.sneaker.model,
      price: this.props.sneaker.price,
      release_date: this.props.sneaker.release_date,
      brand_id: this.props.sneaker.brand_id,
      sneak_pic: this.props.sneaker.sneak_pic,
      id: this.props.sneaker.id
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSneakSubmit = this.handleSneakSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }
  
  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  handleSneakSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        model: '',
        price: '',
        release_date: '',
        brand_id: '',
        sneak_pic: ''
    })
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
                <form onSubmit={this.handleSneakSubmit}>
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
                    <label>Pic</label>
                    <input
                        type="text"
                        name="sneak_pic"
                        value={this.state.sneak_pic}
                        onChange={this.handleChange}
                        placeholder="Image URL in this format http://yourImageURL.jpg"
                        />
                    <button type="submit" value="Save Sneaker">Save Changes</button>
                    <button onClick={this.delete} className="deletebtn">Delete</button>
                </form>
            </div>
          </div>
      )
  } 

}

export default EditSneaker;