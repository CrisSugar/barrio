import React from "react";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import { Link } from "react-router-dom";

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
      filteredOffers = response.filter(offer => {
        return offer.neighbourhood.includes("");
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
      <div>
       <ul className="offers-container">
        {this.state.offers.map(anyoffers => (
          <AnyOffer key={anyoffers._id} {...anyoffers}></AnyOffer>
        ))}</ul>
        <button><Link to={'/offer/new'} className="link">Crear Oferta</Link></button>
      </div>
    );
  }
}
