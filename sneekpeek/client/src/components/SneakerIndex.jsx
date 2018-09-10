import React, { Component } from 'react';
import axios from 'axios';
import SneakerDetails from './SneakerDetails';


class SneakerIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sneakers: [],
            model: '',
            price: '',
            release_date: '',
            selectedSneaker: [{}],
            sneakerSelected: false 
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

    // showSneaker(sneaker) {
    //         axios.get(`http://localhost:3001/sneaker/${sneaker.id}.json`)
    //         .then(resp => {
    //           console.log(resp)
    //           this.setState({
    //             selectedSneaker: resp.data
    //           })
    //         })
    //         .catch(err => console.log(err))
    //       }

    render() {
        // const sneakerSelected = this.state.sneakerSelected;
        //     if (sneakerSelected) {
        //         return (
        //             <div className="sneakerContainer">
        //                 <SneakerDetails sneaker={this.state.selectedSneaker} />
        //             </div>
        //         );
        //     } else {
                return (
                    <div className="sneakerContainer">
                        {this.state.sneakers.map( sneaker => {
                            return (
                                <div className="single-sneaker"  key={sneaker.id}>
                                    {/* <SneakerDetails sneaker={this.state.sneaker}/> */}
                                    <br />
                                    <h4 className="sneakerBrand">{sneaker.brand_id}</h4>
                                    <h4 className="sneakerHeading">{sneaker.model}</h4>
                                    <br />
                                    <img className="sneakerPic" src={sneaker.img} alt="picture of sneaker" />
                                    <span className="sneakerPrice">{sneaker.price}</span>
                                    <span className="sneakerRelease">{sneaker.release_date}</span>
                                    <button type="button" className="editBtn">Edit Sneaker</button>
                                    <span />
                                    <button type="button"className="deleteBtn">Delete Sneaker</button>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                );
            // }
    }
}

export default SneakerIndex;