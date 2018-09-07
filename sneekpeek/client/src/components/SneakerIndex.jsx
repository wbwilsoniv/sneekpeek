import React, { Component } from 'react';
import axios from 'axios';

class SneakerIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sneakers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/sneakers.json')
        .then(resp => {
            console.log(resp)
            this.setState({
                sneakers: resp.data
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="sneakerIndexContainer">
                <h2>Sneakers</h2>
            </div>
        )
    }
}

export default SneakerIndex;