import React, { useReducer } from "react";
import AnyShop from "../anyShop/AnyShop";
import Service from "../../services/Service";
import Axios from "axios";

export default class AllShops extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      shops: [],
      // loggedInUser: userObj
    };
  }

  componentDidMount() {
    this.service.getAllShops().then(response => { 
      let filteredShops;
      filteredShops = response.data.filter((shop) => {
       return shop.neighbourhood.includes("Centro")
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
      <>
        {this.state.shops.map(anyshops => (
          <AnyShop key={anyshops._id} {...anyshops} />
        ))}
      </>
    );
  }
}
