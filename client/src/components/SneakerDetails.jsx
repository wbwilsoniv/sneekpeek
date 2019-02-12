import React from "react";

function SneakerDetails(props) {
  if (props.sneaker[0].id) {
    // renderBrand(id) {
    //     switch(id) {
    //         case 1:
    //         return ('Adidas')
    //         break;
    //         case 2:
    //         return ('Jordan')
    //         break;
    //         case 3:
    //         return ('Nike')
    //         break;
    //         default:
    //         return null;
    //     }
    // };

    return (
      <div className="sneakerContainer">
        <div className="single-sneaker">
          <h4 className="sneakerBrand">{props.sneaker[0].brand_id}</h4>
          <h4 className="sneakerHeading">{props.sneaker[0].model}</h4>
          <img
            className="sneakerPic"
            src={props.sneaker[0].pic_url}
            alt="picture of sneaker"
          />
          <span className="sneakerPrice">${props.sneaker[0].price} (USD)</span>
          <span className="sneakerRelease">
            Release Date: <br /> {props.sneaker[0].release_date}
          </span>
          <span className="editBtn">
            <button
              type="button"
              onClick={e => props.edit(props.sneaker[0].id)}
            >
              Edit Sneaker
            </button>
          </span>
          <span className="deleteBtn">
            <button type="button">Delete Sneaker</button>
          </span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SneakerDetails;
