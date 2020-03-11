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
    this.service.getAllOffers().then(response => {
      let filteredOffers;
      filteredOffers = response.data.filter(offer => {
        return offer.neighbourhood.includes("Delicias");
      });

      this.setState({
        offers: filteredOffers
      });
    });
  }

  render() {
    console.log(this.state.offers);
    // let shops = [this.props.allShops

    return (
      <>
        {this.state.offers.map(anyoffers => (
          <AnyOffer key={anyoffers._id} {...anyoffers}></AnyOffer>
        ))}
      </>
    );
  }
}
