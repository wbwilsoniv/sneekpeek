import React from 'react';

function SneakerDetails(props) {
    return (
        <div className="sneakerDetailsDiv">
            <h3 className="sneakerHeading">Sneaker Details</h3>
            <br />
            <h4>{props.sneaker[0].model}</h4>
            <br />
            <span>{props.sneaker[0].price}</span>
            <span>{props.sneaker[0].release_date}</span>
        </div>
    )
}

export default SneakerDetails;