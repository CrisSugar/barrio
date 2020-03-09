import React from "react";
import AnyShop from "../anyShop/AnyShop";
import Service from "../../services/Service";
import Axios from "axios";

export default class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.service = new Service();
    this.state = {
      shop: null,
    };
  }

  componentDidMount() {
    console.log("entra en el didmount")
    Axios.get(
      `http://localhost:5000/api/shop/${this.props.match.params.id}`
    ).then(response => {
      this.setState({
        shop: response.data
      });
    });
  }

  render() {
    // console.log(this.state.shops);
    // let shops = [this.props.ShopDetail
    if(this.state.shop){
      return (
        <>
          <img src={this.state.shop.image_url} alt=""/> 
          <h4>{this.state.shop.neighbourhood}</h4> 
          <h2>{this.state.shop.name}</h2>
          <p>{this.state.shop.sector}</p>
          <p>{this.state.shop.description}</p>
          <p>Contacto: Web: {this.state.shop.web} Teléfono: {this.state.shop.mobile}</p> 
        </>
      );
    }else{
      return <h2>Cargando info...</h2>
    }
   
  }
}
