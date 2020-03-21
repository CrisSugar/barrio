import React from "react";
import Service from "../../services/Service";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default class ShopDetail extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      shop: null
    };
  }

  componentDidMount() {
    this.service.getShop(this.props.match.params.id).then(response => {
      this.setState({
        // shop: response.data
        shop: response
      });
    });
  }

  render() {
    if (this.state.shop) {
      return (
        <div className="tienda">
          <img src={this.state.shop.image_url} alt="" />
          <h4>{this.state.shop.neighbourhood}</h4>
          <h2>{this.state.shop.name}</h2>
          <p>{this.state.shop.sector}</p>
          <p>{this.state.shop.description}</p>
          <p>
            Contacto: Web: {this.state.shop.web} Teléfono:
            {this.state.shop.mobile}
          </p>
          <Button variant="primary">
          <Link to="/shops" className="link">
            <h4>Ver Tiendas</h4>
          </Link>
        </Button>
        </div>
      );
    } else {
      return <h2>Cargando info...</h2>;
    }
  }
}
