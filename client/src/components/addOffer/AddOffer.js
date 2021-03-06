import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import Service from "../../services/Service";
import { Link } from "react-router-dom";
import "./AddOffer.css";

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighbourhood: "",
      shop: "",
      product: "",
      prize: "",
      offerPrize: ""
    };
    this.service = new Service();
  }

  // this method submits the form
  handleFormSubmit = event => {
    event.preventDefault();
    // this.handleFileUpload(this.state.file)
    const neighbourhood = this.state.neighbourhood;
    const shop = this.state.shop;
    const product = this.state.product;
    const prize = this.state.prize;
    const offerPrize = this.state.offerPrize;

    this.service
      .getAddOffer(this.state)

      //   .saveNewThing(
      //     neighbourhood,
      //     shop,
      //     product,
      //     prize,
      //     offerPrize,
      //   )
      .then(response => {
        console.log("added: ", response);
        // here you would redirect to some other page
        this.setState({
          neighbourhood: "",
          shop: "",
          product: "",
          prize: "",
          offerPrize: "",
          error: false
        });
        // this.props.getOffer(response);
      })
      .catch(err => {
        this.setState({
          neighbourhood: neighbourhood,
          shop: shop,
          product: product,
          prize: prize,
          offerPrize: offerPrize,
          error: true
        });
      });
  };

  handleChange = event => {
    // event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="formoffer">
        <h2>Nueva Oferta</h2>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>
              Barrio:{" "}
              <select
                name="neighbourhood"
                value={this.state.neighbourhood}
                onChange={e => this.handleChange(e)}
              >
                <option value=""></option>
                <option value="Delicias">Delicias</option>
                <option value="Centro">Centro</option>
                <option value="La Almozara">La Almozara</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label>Tienda</label>
            <input
              type="text"
              name="shop"
              value={this.state.shop}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Producto</label>
            <input
              type="text"
              name="product"
              value={this.state.product}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Precio</label>
            <input
              type="text"
              name="prize"
              value={this.state.prize}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Precio de Oferta</label>
            <input
              type="text"
              name="offerPrize"
              value={this.state.offerPrize}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          {/* <input type="file" onChange={e => this.handleFileUpload(e)} /> */}
          <button type="submit" className="link">Guardar</button>
          {/* <input className="enviar" type="submit" value="Enviar" /> */}
          <h1>{this.state.error ? "Error" : ""}</h1>
        </form>
        <button>
          <Link to="/offers" className="link">
            Ver Ofertas
          </Link>
        </button>
      </div>
    );
  }
}

export default AddOffer;
