import React from "react";
import Service from "../../services/Service";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./OfferDetail.css";

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
        <div className="oferta">
          {/* <img src={this.state.offer.image_url} alt=""/>  */}
          <h4>{this.state.offer.neighbourhood}</h4>
          <h4>{this.state.offer.shop}</h4>
          <h2>{this.state.offer.product}</h2>
          <p> Precio : {this.state.offer.prize}</p>
          <p>Precio oferta: {this.state.offer.offerPrize}</p>
          <Button variant="primary"><Link to="/offers" className="link">
            Ver Ofertas
          </Link>
        </Button>
        </div>
      );
    } else {
      return <h2>Cargando info...</h2>;
    }
  }
}
