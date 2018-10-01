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
    const data = {
        model: this.state.model,
        price: this.state.price,
        release_date: this.state.release_date,
        brand_id: this.state.brand_id,
        sneak_pic: this.state.sneak_pic,
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
                <form onSubmit={this.handleSneakSubmit}>
                    <label className="modelLabel">Model:</label>
                    <input
                        type="text"
                        className="modelInput"
                        required="required"
                        value={this.state.model}
                        onChange={this.handleChange}
                        placeholder="Model"
                    />
                    <label className="priceLabel">Price:</label>
                    <input
                        type="number"
                        className="priceInput"
                        required="required"
                        value={this.state.price}
                        onChange={this.handleChange}
                        placeholder="Price"
                    />
                    <label className="releaseLabel">Release Date:</label>
                    <input
                        type="text"
                        className="releaseInput"
                        required="required"
                        value={this.state.release_date}
                        onChange={this.handleChange}
                        placeholder="Release Date"
                    />
                    <label className="brandLabel">Brand:</label>
                    <select
                        className="brand_id_select"
                        onChange={this.handleChange}
                        required="required">
                        <option value="" disabled selected hidden>Select Brand</option>
                        <option value="1">Adidas</option>
                        <option value="2">Jordan</option>
                        <option value="3">Nike</option>
                    </select>
                    <label className="picLabel">Pic</label>
                    <input
                        type="text"
                        className="picInput"
                        value={this.state.sneak_pic}
                        onChange={this.handleChange}
                        placeholder="Image URL in this format http://yourImageURL.jpg"
                        />
                    <div className="btns">
                        <button type="submit" value="Save Sneaker" className="saveBtn">Save</button>
                        <button onClick={this.delete} className="deleteBtn">Delete</button>
                    </div>
                </form>
            </div>
          </div>
      )
  } 

}

export default EditSneaker;