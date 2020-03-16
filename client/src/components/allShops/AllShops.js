import React  from "react";
import AnyShop from "../anyShop/AnyShop";
import Service from "../../services/Service";
import "./AllShops.css";
import { Link } from "react-router-dom";

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
      <div className="cadatienda">
      <ul className="shops-container">
        {this.state.shops.map(anyshops => 
          <AnyShop key={anyshops._id} {...anyshops} />
         ) }
      </ul>
      <button className="buttonshop"><Link to={'/shop/new'} className="link">Añadir Tienda</Link></button>
      </div>
    );
  }
}
