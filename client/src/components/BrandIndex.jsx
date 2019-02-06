import React, { Component } from "react";
// import axios from 'axios';
import { fetchBrands } from "./../services/api";
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
    } else {
      return (
        <div className="brandsIndexContainer">
          {this.state.brands.map(brand => {
            return (
              <div className="single-brand" key={brand.id}>
                <h4 className="brandName">{brand.name}</h4>
                <img src={brand.pic_url} className="brandLogo" />
                <h5 className="brandHq">HQ: {brand.hq}</h5>
                <h5 className="brandFounded">Founded in {brand.founded}</h5>
                <p className="brandDesc">{brand.about}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default BrandIndex;
