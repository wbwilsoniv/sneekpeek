import React, { Component } from "react";
// import axios from 'axios';
import { fetchBrands } from "../services/api";
import Loader from "./Loader";

class BrandIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      brands: []
    };
  }

  // componentDidMount() {
  //     axios.get('http://localhost:3001/brands.json')
  //     .then(resp => {
  //         // console.log(resp)
  //         this.setState({
  //             brands: resp.data
  //         })
  //     })
  //     .catch(err => console.log(err))
  // }

  componentDidMount() {
    fetchBrands().then(data =>
      this.setState({ isLoading: false, brands: data })
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return (
      <div className="brandsIndex-container">
        {this.state.brands.map(brand => {
          return (
            <div className="single-brand" key={brand.id}>
              <h4 className="brandName title is-3">{brand.name}</h4>
              <div className="brand logoDiv">
                <figure className="image is128x128">
                  <img src={brand.img_url} className="brandLogo" />
                </figure>
              </div>
              <p className="brandHq">
                <strong>HQ: </strong> 
{' '}
{brand.hq}
              </p>
              <p className="brandFounded">
                <strong>Founded:</strong> 
{' '}
{brand.founded}
              </p>
              <p className="brandDesc">{brand.about}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BrandIndex;
