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
    this.user = this.props.userInSession;
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    console.log(this.props.userInSession)
    console.log(this.state.user)
    // if (this.state.loggedInUser) {
    if (this.props.userInSession) {
      return (
        <div className="navbar-div">
          <nav className="nav-style">
            <Link to="/Home">
              <img
                src="../../../logo193.png"
                alt="logo"
                height="60"
                className="navimag"
              />
            </Link>
            <ul>
              <div className="div-nav">
                <li>
                  {/* <h2>Hola, {this.props.loggedInUser.username} !</h2> */}
                  <h2>Hola, {this.props.userInSession.username} !</h2>
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
              <li>
                  <Link to="/signup" className="link">
                    Comerciante
                  </Link>
                </li>
                <li>
                  <Link to="/signupClient" className="link">
                    Vecino
                  </Link>
                </li>
                <li>
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
