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

  fetchShops = () =>{
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

  componentDidMount() {
    if(this.state.shops.length === 0) {
      this.fetchShops()
    }
  }

  render() {
    console.log(this.state.shops);

    return (
      <div className="cadatienda">
      <ul className="shops-container">
        {this.state.shops.map(anyshops => 
          <AnyShop userInSession={this.props.userInSession} deletedShop={()=>this.fetchShops()} key={anyshops._id} {...anyshops} />
         ) }
      </ul>
      {this.props.userInSession.role === "owner" &&
      <button className="buttonshop"><Link to={'/shop/new'} className="link">Añadir Tienda</Link></button>
      }
      {/* Siempre lo que se devuelve que esté envuelto en un div o un React.fragment :) 
      {this.props.userInSession.role === "owner" ?
      <h1>Hola, eres owner</h1> :
      <h1>Hola, eres client</h1>
      } */}



      
      </div>
    );
  }
}
