import React, { Component } from "react";

class CreateSneaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: "",
      price: "",
      release_date: "",
      brand_id: "",
      pic_url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSneakSubmit = this.handleSneakSubmit.bind(this);
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSneakSubmit(evt) {
    evt.preventDefault();
    const data = {
      model: this.state.model,
      price: this.state.price,
      release_date: this.state.release_date,
      brand_id: this.state.brand_id,
      pic_url: this.state.pic_url
    };
    this.props.onSubmit(data);
  }

  render() {
    return (
      <div className="container createDiv">
        <div className="field">
          <form onSubmit={this.handleSneakSubmit}>
            <label className="label is-medium createTitle">Add New</label>
            <div className="field">
              <label className="label createLabel">Model:</label>
              <div className="control">
                <input
                  placeholder="Model"
                  type="text"
                  className="input"
                  name="model"
                  value={this.state.model}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label createLabel">Price:</label>
              <div className="control">
                <input
                  placeholder="Price"
                  type="text"
                  className="input"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label createLabel">Release Date:</label>
              <div className="control">
                <input
                  placeholder="Release Date"
                  type="text"
                  className="input"
                  name="release_date"
                  value={this.state.release_date}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label createLabel">Brand:</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option value="">Select Brand</option>
                    <option value="1">Adidas</option>
                    <option value="2">Jordan</option>
                    <option value="3">Nike</option>
                    <option value="4">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label createLabel">Pic</label>
              <div className="control">
                <input
                  placeholder="Image URL in this format http://yourImageURL.jpg"
                  type="text"
                  className="input"
                  value={this.state.pic_url}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-medium is-primary">
                Create Sneaker
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateSneaker;
