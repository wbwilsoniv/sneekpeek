import React, { Component } from 'react';
import axios from 'axios';

class SneakerIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sneakers: [],
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
                {this.state.sneakers.map( sneaker => {
                    return (
                        <div className="single-sneaker" key={sneaker.id}>
                            <h4>{sneaker.model}</h4>
                            <p>{sneaker.price}</p>
                            <p>{sneaker.release_date}</p>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SneakerIndex;