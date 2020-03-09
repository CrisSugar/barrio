import React from "react";
import AllShops from "../allShops/AllShops";
import AllOffers from "../allOffers/AllOffers";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class HomeClient extends React.Component {
    constructor(props) {
      super(props);
      this.service = new Service();
      this.state = {
        offers: [],
        shops: []
      };
    }

    // componentDidMount() {
    //   Axios.get("http://localhost:5000/api/offers").then(response => {
    //   this.setState({
    //     offers: response.data,
    //   });
    // }

  render(){
    return (
      <div class="homeclient">
        <AllOffers></AllOffers>
        <div>
          <h4><Link to="/shops">Todas las tiendas</Link></h4>
        </div>
      </div>
     
    );
  }
}
