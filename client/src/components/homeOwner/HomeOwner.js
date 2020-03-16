import React from "react";
import AllShops from "../allShops/AllShops";
import Service from "../../services/Service";
import { Link } from "react-router-dom";


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
        console.log(shop);
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
  }
}
