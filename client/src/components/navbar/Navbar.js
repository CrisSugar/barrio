import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
// import logo192 from "../../";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li></li>
              <li>
                <a onClick={this.handleLogout}>Logout</a>
              </li>
            </ul>

            <div className="header">
              {/* <img src={logo192} alt="" height="100"/> */}
              <h2>Hola, {this.state.loggedInUser.username} !</h2>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li className="navlink">
                <Link to="/signup">Registrarse</Link>
              </li>
              <li className="navlink">
                <Link to="/login">Iniciar sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
