import React, { Component } from 'react';
import axios from 'axios';
// import SneakerDetails from './SneakerDetails';


class SneakerIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sneakers: [],
            model: '',
            price: '',
            release_date: '',
            sneak_pic: '',
            sneakerToEdit: {},
            //selectedSneaker: [{}],
            sneakerSelected: false,
            view: '' 
        }
        // this.getSneaker = this.getSneaker.bind(this);
        this.toggleSneakerSelected = this.toggleSneakerSelected.bind(this);
    }
    
    componentDidMount() {
        axios.get('http://localhost:3001/sneakers.json')
        .then(resp => {
            console.log(resp)
            this.setState({
                sneakers: resp.data,
            })
        })
        .catch(err => console.log(err))
    }

    handleSneakerSelect

    toggleSneakerSelected() {
        this.state.sneakers.filter(sneaker => 
            this.setState({
                sneakerToEdit: sneaker,
                sneakerSelected: true
                })
        )

        console.log(this.state.sneakerToEdit)
        //debugger
    }

    // props.handle
        // 3 functions => fetch call for edit => change state (toggle editButton selectedSneaker) => (props.selectedsneaker) 

    // getSneaker(sneaker) {
    //         axios.get(`http://localhost:3001/sneakers/${sneaker.id}.json`)
    //         .then(resp => {
    //           console.log(resp)
    //           this.setState({
    //             Sneaker: resp.data
    //           })
    //         })
    //         .catch(err => console.log(err))
    //       }
    
    // currently makes nonstop requests!
    
    
    
    // getSneaker(id) {
    //     if(sneakerToEdit.isEmpty) {
    //     axios.get(`http://localhost:3001/sneakers/${id}.json`)
    //         .then(resp => {
    //             console.log(resp)
    //           this.setState({
    //             sneakerDetails: resp.data
    //           })
    //         })
    //         .catch(err => console.log(err))
    //     } 
    // }

    // handleEdit(id) {
    //     this.setState({
    //         sneaker: selectedSneaker
    //     });
    // }


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
        const sneakerSelected = this.state.sneakerSelected;
        const sneakerToEdit = this.state.sneakerToEdit;
        // if(this.state.sneakerSelected && this.state.sneakerToEdit.isEmpty) {
                return (
                    <div className="sneakerContainer">
                        {this.state.sneakers.map( sneaker => {
                            return (
                                <div className="single-sneaker"  key={sneaker.id}>
                                    {/* <SneakerDetails sneaker={this.state.sneaker}/> */}
                                    <h4 className="sneakerBrand">{ this.renderBrand(sneaker.brand_id) }</h4>
                                    <h4 className="sneakerHeading">{sneaker.model}</h4>
                                    <img className="sneakerPic" src={sneaker.sneak_pic} alt="picture of sneaker" />
                                    <span className="sneakerPrice">${sneaker.price} (USD)</span>
                                    <span className="sneakerRelease">Release Date: <br /> {sneaker.release_date}</span>
                                    <span className="editBtn"><button type="button" value={sneaker.value} onClick={this.toggleSneakerSelected}>Edit Sneaker</button></span>
                                    <span className="deleteBtn"><button type="button">Delete Sneaker</button></span>
                                </div>
                            )
                        })}
                    </div>
                );
            // } else {
            //     return (
            //         <div className="sneakerContainer">
            //             <div className="single-sneaker">
            //                 <h4 className="sneakerBrand">{ this.renderBrand(sneakerSelected.brand_id) }</h4>
            //                 <h4 className="sneakerHeading">{sneakerSelected.model}</h4>
            //                 <img className="sneakerPic" src={sneakerSelected.sneak_pic} alt="picture of sneaker" />
            //                 <span className="sneakerPrice">${sneakerSelected.price} (USD)</span>
            //                 <span className="sneakerRelease">Release Date: <br /> {sneakerSelected.release_date}</span>
            //                 <span className="editBtn"><button type="button" onClick={this.toggleSneakerSelected()}>Edit Sneaker</button></span>
            //                 <span className="deleteBtn"><button type="button">Delete Sneaker</button></span>
            //             </div>
            //         </div>
            //     );
            // }
    }
}

export default SneakerIndex;