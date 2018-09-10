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
    renderBrand(brand_id) {
        switch(brand_id) {
            case 1:
            return ('Adidas')
            break;
            case 2:
            return ('Jordan')
            break;
            case 3:
            return ('Nike')
            break;
            default:
            return null;  
        }
    }

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
                                    <h4 className="sneakerBrand">{ this.renderBrand(sneaker.brand_id) }</h4>
                                    <h4 className="sneakerHeading">{sneaker.model}</h4>
                                    <img className="sneakerPic" src={sneaker.sneak_pic} alt="picture of sneaker" />
                                    <span className="sneakerPrice">Price: $ {sneaker.price} (USD)</span>
                                    <span className="sneakerRelease">Release Date: <br /> {sneaker.release_date}</span>
                                    <span className="editBtn"><button type="button" >Edit Sneaker</button></span>
                                    <span className="deleteBtn"><button type="button">Delete Sneaker</button></span>
                                </div>
                            )
                        })}
                    </div>
                );
            // }
    }
}

export default SneakerIndex;