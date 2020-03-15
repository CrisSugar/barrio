import React, { useReducer } from "react";
import AllShops from "../allShops/AllShops";
import AnyShops from "../anyShop/AnyShop";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import Axios from "axios";
import { Link } from "react-router-dom";



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

export default class HomeOwner extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      shops: []
      // loggedInUser: userObj
    };
  }

  componentDidMount() {
    this.service.getAllShops().then(response => {
      let filteredShops;
      filteredShops = response.filter(shop => {
        console.log(shop)
        return shop.neighbourhood.includes("");
      });
      this.setState({
        shops: filteredShops
      });
    });
  }

  render() {
    return (
      <div className="homeowner">
        <AllShops></AllShops>
        <div className="but-cont">
          <div>
            <button><Link to="/offers" className="link">
              <h4>Todas las ofertas</h4>
            </Link></button>
          </div>
          <div>
            <button><Link to="/notifications" className="link">
              <h4>Todos los avisos</h4>
            </Link></button>
          </div>
        </div>
      </div>
    );
  }
}
