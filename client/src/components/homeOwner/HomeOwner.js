import React, { useReducer } from "react";
import AllShops from "../allShops/AllShops";
import AnyShops from "../anyShop/AnyShop";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class HomeOwner extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      offers: [],
      shops: []
    };
  }

  //   componentDidMount() {
  //     Axios.get("http://localhost:5000/api/shops").then(response => {
  //     this.setState({
  //       shops: response.data
  //     });
  //   }

  render() {
    return (
      <div class="homeowner">
        <AllShops></AllShops>
        <div>
          <h4>
            <Link to="/offers">Todas las ofertas</Link>
          </h4>
        </div>
      </div>
    
    );
  }
}
