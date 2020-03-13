import React from "react";
import Service from "../../services/Service";
import { Link } from "react-router-dom";

export default class OfferDetail extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      offer: null
    };
  }

  componentDidMount() {
    this.service.getOffer(this.props.match.params.id).then(response => {
      this.setState({
        offer: response
      });
    });
  }

  render() {
    if (this.state.offer) {
      return (
        <div>
          {/* <img src={this.state.offer.image_url} alt=""/>  */}
          <h4>{this.state.offer.neighbourhood}</h4>
          <h4>{this.state.offer.shop}</h4>
          <h2>{this.state.offer.product}</h2>
          <p> Precio : {this.state.offer.prize}</p>
          <p>Precio oferta: {this.state.offer.offerPrize}</p>
          <button><Link to="/offers">
            <h4>Ver todas las ofertas</h4>
          </Link>
        </button>
        </div>
      );
    } else {
      return <h2>Cargando info...</h2>;
    }
  }
}
