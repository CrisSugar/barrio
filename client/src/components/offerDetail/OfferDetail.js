import React from "react";
import AnyOffer from "../anyOffer/AnyOffer";
import Service from "../../services/Service";
import Axios from "axios";

export default class OfferDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.service = new Service();
    this.state = {
      offer: null
    };
  }

  componentDidMount() {
    Axios.get(
      `http://localhost:5000/api/offer/${this.props.match.params.id}`
    ).then(response => {
      this.setState({
        offer: response.data
      });
    });
  }

  
    render() {
      // console.log(this.state.shops);
      // let shops = [this.props.ShopDetail
      if(this.state.offer){
        return (
          <>
            {/* <img src={this.state.offer.image_url} alt=""/>  */}
            <h4>{this.state.offer.neighbourhood}</h4> 
            <h4>{this.state.offer.shop}</h4>
            <h2>{this.state.offer.product}</h2>
            <p> Precio : {this.state.offer.prize}</p>
            <p>Precio oferta: {this.state.offer.offerPrize}</p> 
          </>
        );
      }else{
        return <h2>Cargando info...</h2>
      }
     
    }
}
