import React, { Component } from "react";

import Service from "../../services/Service";
import { Link } from "react-router-dom";
import "./AddShop.css"


class AddShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      neighbourhood: "",
      sector: "",
      description: "",
      imageUrl: "",
      owner: "",
      mobile: "",
      web: "",
      year: ""
    };
    this.service = new Service();
  }

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e);
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e);
    // uploadData.append("imageUrl", e.target.files[0]);


    this.service
      .handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        console.log(response.secure_url);
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  };

  // this method submits the form
  handleFormSubmit = event => {
    event.preventDefault();
    this.handleFileUpload(this.state.file);
    const name = this.state.name;
    const neighbourhood = this.state.neighbourhood;
    const sector = this.state.sector;
    const description = this.state.description;
    const imageUrl = this.state.imageUrl;
    const owner = this.state.owner;
    const mobile = this.state.mobile;
    const web = this.state.web;
    const year = this.state.year;

    this.service.getAddShop(this.state)

    //   .saveNewThing(
    //     name,
    //     neighbourhood,
    //     sector,
    //     description,
    //     imageUrl,
            // owner
      //     mobile,
      //     web,
      //     year,
      //     lat,
      //     lng
      //   )

      .then(response => {
        console.log("added: ", response);
        // here you would redirect to some other page
        this.setState({
          name: "",
          neighbourhood: "",
          sector: sector,
          description: "",
          imageUrl: "",
          flie: "file",
          owner:"",
          mobile: "",
          web: "",
          year: "",
          error: false
        });
        // this.props.getShop(response);
      })
      .catch(err => {
        this.setState({
          name: name,
          neighbourhood: neighbourhood,
          sector: sector,
          description: description,
          imageUrl: imageUrl,
          owner: owner,
          mobile: mobile,
          web: web,
          year: year,
          error: true
        });
      });
  };

  handleChange = event => {
    // event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImage = event => {
    // event.preventDefault();
    const { name, value, files } = event.target;
    this.setState({ [name]: value });
    this.setState({ ["file"]: files[0] });
  };

  render() {
    return (
      <div className="formshop">
        <h2>Nueva Tienda</h2>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
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
            <label>Sector</label>
            <input
              type="text"
              name="sector"
              value={this.state.sector}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Descripción</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Imagen</label>
            <input
              type="file"
              // name="imageUrl"
              // value={this.state.file}
              // onChange={e => this.handleImage(e)}
              onChange={e => this.handleFileUpload(e)}
            />
          </fieldset>
          <fieldset>
            <label>Propietario</label>
            <input
              type="text"
              name="owner"
              value={this.state.owner}
              onChange={e => this.handleChange(e)}
            
            />
          </fieldset>
          <fieldset>
            <label>Móvil</label>
            <input
              type="text"
              name="mobile"
              value={this.state.mobile}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Web</label>
            <input
              type="text"
              name="web"
              value={this.state.web}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>year</label>
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
    
          {/* <input type="file" onChange={e => this.handleFileUpload(e)} /> */}
          <button type="submit" className="link">Guardar</button>
          {/* <input className="enviar" type="submit" value="Enviar" /> */}
          <h1>{this.state.error ? "Error" : ""}</h1>
        </form>
        <button>
          <Link to="/shops" className="link">
            Ver Tiendas
          </Link>
        </button>
      </div>
    );
  }
}

export default AddShop;
