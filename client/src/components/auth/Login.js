import React, { Component } from "react";

import AuthService from "./AuthService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log(username,password)

    this.service
      .login(username, password)
      .then(response => {
        // console.log("entra en la peticion")
        // console.log(response);
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
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
        <h3>Inicia sesión con tus datos:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Usuario:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
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

export default Login;
