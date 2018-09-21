import React from 'react';
import SneakerIndex from './SneakerIndex';
import SneakerDetails from './SneakerDetails';

function ViewContainer(props) {
    if(sneakerSelected) {
        return (
            <div className="viewContainer">
                <SneakerDetails selectedSneaker={this.props.selectedSneaker}/>
            </div>
        )
    }   else {
            return (
                <div className="viewContainer">
                    <SneakerIndex sneakers={this.props.sneakers}/>
                </div>
            )
    }
}

export default ViewContainer;