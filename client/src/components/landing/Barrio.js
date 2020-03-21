import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import "../landing/Barrio.css";
import { Link } from "react-router-dom";

//signup y login son iguales a excepción de el html renderizado y el endpoint de nuestra API rest a la que llamamos
//uno llama a /signup y el otro a /login usando nuestro AuthService
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    return (
      <div className="landing">
        <div className="divtext">
          <h2>
            ¿Alguna vez has pedido "cuarto y mitad" en la
            carnicería? ¿El camarero de ese bar te pregunta si quieres
            "lo de siempre"? ¿Aprendiste de tu padre a adivinar
            qué necesita cada cliente? ¿Crees que juntos se llega más lejos?
          </h2>

          <h3>
            Si es así, ¡eres gente de <strong>BARRIO</strong>! Únete y colabora
            para mantener nuestro barrio vivo.{" "}
          </h3>
        </div>
 
        <div className="slider">
          <ul>
            <li>
              <img src="carrousel1.jpg"  alt="clothshop" />
            </li>
            <li>
              <img src="carrousel2.jpg"  alt="cafe" />
            </li>
            <li>
              <img src="carrousel.3.jpg"  alt="" />
            </li>
            <li>
              <img src="carrousel4.jpg"  alt="" />
            </li>
            <li>
              <img src="carrousel6.jpeg"  alt="owner" />
            </li>
          </ul>
        </div>
        <div >
          <ul className="questions">
            <li>Preguntas frecuentes</li>
            <li>Quiénes somos</li>
            <li>Política de privacidad</li>
            <li>Contacto</li>

          </ul>
        </div>
        

      </div>
    );
  }
}

export default Landing;
