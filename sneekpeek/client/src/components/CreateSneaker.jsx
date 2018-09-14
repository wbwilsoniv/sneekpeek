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
                    <label>Model:</label>
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
                    <input
                        type="text"
                        name="release_date"
                        required="required"
                        value={this.state.release_date}
                        onChange={this.handleChange}
                        placeholder="Release Data"
                    />
                    <br />
                    <label>Brand:</label>
                    <select
                        name="brand_id"
                        onChange={this.handleChange}
                        required="required">
                        <option value="default">Select Brand</option>
                        <option value="1">Adidas</option>
                        <option value="2">Jordan</option>
                        <option value="3">Nike</option>
                    </select>
                    <br />
                    <button type="submit" value="Create Sneaker">Create Sneaker</button>
                </form>
            </div>
        )
    }
}

export default CreateSneaker;