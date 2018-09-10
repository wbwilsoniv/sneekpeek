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
    setSneaker(sneaker) {
        this.setState({
            selectedSneaker: sneaker
        })
    }
    showSneaker(sneaker) {
        this.setState({
          selectedSneaker: sneaker
        })
        console.log(sneaker)
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
                                    <br />
                                    <h4 className="sneakerHeading">{sneaker.model}</h4>
                                    <br />
                                    <span>{sneaker.price}</span>
                                    <span>{sneaker.release_date}</span>
                                    <button type="button" value={sneaker} onClick={this.props.setSneaker}>Show Details</button>
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