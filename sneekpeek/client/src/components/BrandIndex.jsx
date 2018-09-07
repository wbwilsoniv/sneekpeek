import React, { Component } from 'react';
import axios from 'axios';

class BrandIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brands: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/brands.json')
        .then(resp => {
            console.log(resp)
            this.setState({
                brands: resp.data
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="brandsIndexContainer">
                {this.state.brands.map( brand => {
                    return (
                        <div className="single-brand" key={brand.id}>
                            <h4>{brand.name}</h4>
                            <span>{brand.founded}</span>
                            <span>{brand.hq}</span>
                            <p>{brand.about}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BrandIndex;