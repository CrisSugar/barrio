import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../../services/Service";
import AllShops from "../allShops/AllShops";
import AllOffers from "../allOffers/AllOffers";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      shops: [],
      offers: []
      // role:""
    };
    this.service = new Service();
  }

  componentDidMount = () => {
    this.fetchThings();
  };

  fetchThings() {
    this.service.getAllShops(this.props.userInSession._id).then(response => {
      let filteredShops;
      filteredShops = response.filter(shop => {
        console.log(shop);
        return shop.neighbourhood.includes("");
      });
      this.setState({
        shops: filteredShops
      });
    });

    this.service.getAllOffers(this.props.userInSession._id).then(response => {
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
    if (this.props.userInSession.role === "owner") {
      return (
        <div className="homeowner">
          <AllShops></AllShops>
          <div className="but-cont">
            <button>
              <Link to="/offers" className="link">
                Todas las ofertas
              </Link>
            </button>

            <button>
              <Link to="/notifications" className="link">
                Todos los avisos
              </Link>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="homeclient">
          <h1 className="titular">
            Aquí encontrarás un montón de ofertas, échales un ojo!
          </h1>
          <div className="item">
            <AllOffers></AllOffers>
          </div>

          <div>
            <h4>
              <button>
                <Link to="/shops" className="link">
                  Todas las tiendas
                </Link>
              </button>
            </h4>
          </div>
        </div>
      );
    }
  }
}
