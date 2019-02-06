import React from "react";

function Brand(props) {
  return (
    <div className="brand-list card" key={brand.id}>
      <h4 className="card-header-title">{brand.name}</h4>
      <div className="card-image">
        <figure class="image is128x128">
          <img src={brand.pic_url} className="brandLogo" />
        </figure>
      </div>
      <div className="card-content">
        <span className="">{brand.founded}</span>
        <span className="">{brand.hq}</span>
        <p className="">{brand.about}</p>
      </div>
    </div>
  );
}

export default Brand;
