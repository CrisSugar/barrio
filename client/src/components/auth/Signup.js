import React, { Component } from 'react';
import AuthService from './AuthService'

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' , neighbourhood: '' , role: ''};
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const neighbourhood = this.state.neighbourhood;
    const role = this.state.role;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service.signup(username, password, neighbourhood)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            neighbourhood: "",
            role: ""
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user)
    })
    .catch(error => {
      this.setState({
        username: username,
        password: password,
        neighbourhood: neighbourhood,
        role: role,
        error: true
      });
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div> 
      <h1> ;-) </h1>
        <h3>¡Bienvenido a tu Barrio! Crea tu cuenta aquí:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Nombre de Usuario:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>

          <fieldset>
            <label>Rol: <select name="role" value={this.state.role} onChange={ e => this.handleChange(e)}>
            <option value=""></option>
            <option value="vecino">Vecino</option>
            <option value="comerciante">Comerciante</option>
          </select> </label>
          </fieldset>

          <fieldset>
            <label>Barrio:</label>
            <input type="text" name="neighbourhood" value={this.state.neighbourhood} onChange={ e => this.handleChange(e)}/>
          </fieldset>

          <fieldset>
            <label>Contraseña:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input className="enviar" type="submit" value="Enviar" />
        </form>

        <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>
    )
  }
}

export default Signup;