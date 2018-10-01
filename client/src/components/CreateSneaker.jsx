import React, { Component } from 'react';

class CreateSneaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            price: '',
            release_date: '',
            brand_id: '',
            sneak_pic: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSneakSubmit = this.handleSneakSubmit.bind(this);
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
    
    render() {
        return (
            <div className="createSneakerFormDiv">
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
                        <button type="submit" value="Create Sneaker">Create Sneaker</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateSneaker;