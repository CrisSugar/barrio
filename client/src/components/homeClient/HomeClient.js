import React from "react";
import AnyOffer from "../anyOffer/AnyOffer";
import AllOffers from "../allOffers/AllOffers";
import Service from "../../services/Service";
import { Link } from "react-router-dom";

export default class HomeClient extends React.Component {
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
    return (
      <div class="homeclient">
        <h1 className="titular">
          Aquí encontrarás un montón de ofertas, échales un ojo!
        </h1>
        <div className="item">
          <AllOffers></AllOffers>
        </div>

        <div>
          <h4>
            <button><Link to="/shops">Todas las tiendas</Link></button>
          </h4>
        </div>
      </div>
    );
  }
}
