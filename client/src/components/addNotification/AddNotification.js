import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import Service from "../../services/Service";
import { Link } from "react-router-dom";
import "./AddNotification.css";


class AddNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighbourhood: "",
      commentary: ""
    };
    this.service = new Service();
  }


  // this method submits the form
  handleFormSubmit = event => {
    event.preventDefault();
    // this.handleFileUpload(this.state.file)
    const neighbourhood = this.state.neighbourhood;
    const commentary = this.state.commentary;

    this.service
      .getAddNotification(this.state)

      //   .saveNewThing(
      //     neighbourhood,
      //     commentary,
      //   )
      .then(response => {
        console.log("added: ", response);
        // here you would redirect to some other page
        this.setState({
          neighbourhood: "",
          commentary: "",
          error: false
        });
        // this.props.getNotification(response);
      })
      .catch(err => {
        this.setState({
          neighbourhood: neighbourhood,
          commentary: commentary,
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
      <div className="formnotif">
        <h2>Nuevo Aviso</h2>
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
            <label>Comentario</label>
            <input
              type="text"
              name="commentary"
              value={this.state.commentary}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          {/* <input type="file" onChange={e => this.handleFileUpload(e)} /> */}
          <button type="submit" className="link">Guardar</button>

          {/* <input className="enviar" type="submit" value="Enviar" /> */}
          <h1>{this.state.error ? "Error" : ""}</h1>
        </form>
        <button>
          <Link to="/notifications" className="link">
            Ver Avisos
          </Link>
        </button>
      </div>
    );
  }
}

export default AddNotification;
