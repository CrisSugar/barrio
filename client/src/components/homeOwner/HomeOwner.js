import React, { useReducer } from "react";
import AllShops from "../allShops/AllShops";
import AnyShops from "../anyShop/AnyShop";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class HomeOwner extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.service = new Service();
  //   this.state = {
  //     offers: [],
  //     shops: []
  //   };
  // }

  //   componentDidMount() {
  //     Axios.get('${process.env.REACT_APP_API_URL}/shops').then(response => {
  //     this.setState({
  //       shops: response.data
  //     });
  //   }

  render() {
    return (
      <div class="homeowner">
        <AllShops></AllShops>
        <div>
          <div>
            <Link to="/offers"><h4>Todas las oferta></h4></Link>
          </div>
          <div>
            <Link to="/notifications"><h4>Todos los avisos</h4></Link>
          </div>
        </div>
      </div>
    );
  }
}
