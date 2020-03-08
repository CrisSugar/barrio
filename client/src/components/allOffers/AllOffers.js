import React from "react";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import Axios from "axios";

export default class AllOffers extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      offers: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/offers").then(response => {
      this.setState({
        offers: response.data
      });
    });
}

    
    render() {
        console.log(this.state.offers)
        // let shops = [this.props.allShops
    
    return (
        <>
        
        {this.state.offers.map(anyoffers => (
          <AnyOffer key={anyoffers._id} anyoffers={anyoffers} ></AnyOffer> 
        ))} 
        </>
   
      
 )
  }
}