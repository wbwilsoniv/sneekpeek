import React from 'react';

function Brand(props) {
    return (
        <div className="brand-list" key={brand.id}>
            <h4>{brand.name}</h4>
            <img src={brand.pic_url} className="brandLogo" />
            <span>{brand.founded}</span>
            <span>{brand.hq}</span>
            <p>{brand.about}</p>
        </div>
    ) 
}

export default Brand;