import React, { Component } from 'react';
import axios from 'axios';
// import SneakerDetails from './SneakerDetails';


class SneakerIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sneakers: [],
            sneakerToEdit: {},
            sneakerSelected: false, 
        }
        this.toggleSneakerSelected = this.toggleSneakerSelected.bind(this);
    }
    
      // gets all and sets state for Sneakers
  componentDidMount() {
    axios.get('http://localhost:3001/sneakers.json')
    .then(resp => {
        this.setState({
            sneakers: resp.data,
        })
    })
    .catch(err => console.log(err))
}

   
    // handles click and sets state for sneaker edit
    // changes boolean value for sneakerSelected. to be used for conditional render.
    // WIP currently sets last item in sneakers as sneaker to edit no matter what button is clicked.
    toggleSneakerSelected(e) {
        // this.state.sneakers.filter(sneaker => 
        const editsneaker = this.state.sneakers.filter(sneaker => sneaker.id === parseInt(e.target.value));   
        debugger
        this.setState({
                sneakerToEdit: editsneaker[0], 
                sneakerSelected: true
                })
        // )
        debugger
    }

    // props.handle
        // 3 functions => fetch call for edit => change state (toggle editButton selectedSneaker) => (props.selectedsneaker) 

 
    // shows brand name instead of brand_id for sneaker
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
        let sneakers = [this.state.sneakers];
        return (
        <div className="sneakerContainer">
            {this.state.sneakers.map(sneaker => {
                return (
                    <div className="single-sneaker"  key={sneaker.id}>
                        <h4 className="sneakerBrand">{ this.renderBrand(sneaker.brand_id) }</h4>
                        <h4 className="sneakerHeading">{sneaker.model}</h4>
                        <img className="sneakerPic" src={sneaker.sneak_pic} alt="picture of sneaker" />
                        <span className="sneakerPrice">${sneaker.price} (USD)</span>
                        <span className="sneakerRelease">Release Date: <br /> {sneaker.release_date}</span>
                        <span className="editBtn"><button type="button" value={sneaker.id} onClick={(e) => this.toggleSneakerSelected(e)}>Edit Sneaker</button></span>
                        <span className="deleteBtn"><button type="button">Delete Sneaker</button></span>
                    </div>
                )
            })}
        </div>
        )     
    }
}

export default SneakerIndex;