import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import Service from "../../services/Service";

class AddOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighbourhood: "",
      shop: "",
      product: "",
      prize: "",
      offerPrize: "",
    };
    this.service = new Service();
  }

  // this method handles just the file upload
//   handleFileUpload = e => {
//     console.log("The file to be uploaded is: ", e);

    // const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    // uploadData.append("imageUrl", e);

    // this.service.handleUpload(uploadData)
    //   .then(response => {
    //     // console.log('response is: ', response);
    //     // after the console.log we can see that response carries 'secure_url' which we can use to update the state
    //     console.log(response.secure_url)
    //     this.setState({ imageUrl: response.secure_url });
    //   })
    //   .catch(err => {
    //     console.log("Error while uploading the file: ", err);
    //   });
  // };

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
          neighbourhood: '',
          shop: '',
          product: '',
          prize: '',
          offerPrize: '',
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
    const {
      name, value
    } = event.target;
    this.setState({ [name]: value });
  };

  // handleImage = event => {
  //   // event.preventDefault();
  //   const {
  //     name, value,files
  //   } = event.target;
  //   this.setState({ [name]: value});
  //   this.setState({ ["file"]: files[0]});
  // };

  render() {
    return (
      <div>
        <h2>Nueva Oferta</h2>
        <form onSubmit={this.handleFormSubmit}>

          <fieldset>
            <label>Barrio</label>
            <input
              type="text"
              name="neighbourhood"
              value={this.state.neighbourhood}
              onChange={e => this.handleChange(e)}
            />
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
          <button type="submit">Guardar</button>
          {/* <input className="enviar" type="submit" value="Enviar" /> */}
          <h1>{this.state.error ? "Error" : ""}</h1>
        </form>
      </div>
    );
  }
}

export default AddOffer;