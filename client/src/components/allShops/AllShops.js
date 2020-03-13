import React, { useReducer } from "react";
import AnyShop from "../anyShop/AnyShop";
import Service from "../../services/Service";
import "./AllShops.css";

export default class AllShops extends React.Component {
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
    console.log(this.state.shops);
    // let shops = [this.props.allShops

    return (
      <ul className="shops-container">
        {this.state.shops.map(anyshops => (
          <AnyShop key={anyshops._id} {...anyshops} />
        ))}
      </ul>
    );
  }
}
