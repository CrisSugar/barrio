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

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div className="navbar-div">
          <nav className="nav-style">
            <img
              src="../../../logo193.png"
              alt="logo"
              height="60"
              className="navimag"
            />
            <ul>
              <div className="div-nav">
                <li>
                  <h2>Hola, {this.state.loggedInUser.username} !</h2>
                </li>
                <li>
                  <a onClick={this.handleLogout} className="link">
                    Logout
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="navbar-div">
          <nav className="nav-style">
            <img
              className="navimag"
              src="../../../logo193.png"
              alt=""
              height="60"
            />
            <ul>
              <div className="div-nav">
                <li className="navlink">
                  <Link to="/signup" className="link">
                    Registrarse
                  </Link>
                </li>
                <li className="navlink">
                  <Link to="/login" className="link">
                    Iniciar sesión
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
