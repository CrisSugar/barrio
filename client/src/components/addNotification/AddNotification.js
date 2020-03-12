import React, { Component } from "react";
import Service from "../../services/Service";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class AddOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighbourhood: "",
      commentary: "",
      date: ""
    };
    this.service = new Service();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const neighbourhood = this.state.neighbourhood;
    const commentary = this.state.commentary;
    const date = this.state.date;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service
      .signup(neighbourhood, commentary, date)
      .then(response => {
        this.setState({
          commentary: "",
          neighbourhood: "",
          date: ""
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user);
      })
      .catch(error => {
        this.setState({
          commentary: commentary,
          neighbourhood: neighbourhood,
          date: date,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1> ;-) </h1>
        <h3>Añade una noticia que nos interese a todos:</h3>

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
              </select>{" "}
            </label>
          </fieldset>

          <fieldset>
            <label>Comentario:</label>
            <input
              type="text"
              name="commentary"
              value={this.state.commentary}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Fecha:</label>
            <input
              type="number"
              name="date"
              value={this.state.date}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <input className="enviar" type="submit" value="Enviar" />
        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
      </div>
    );
  }
}

export default AddOne;
