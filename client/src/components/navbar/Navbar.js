import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
// import logo192 from "../../";
import "./Navbar.css"

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
        <nav className="nav-style">
        
          <ul>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>

          <div className="header">
            {/* <img src={logo192} alt="" height="100"/> */}
            <h2>Welcome {this.state.loggedInUser.username} - Ironhacker</h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <button><Link to="/signup">Registrarse</Link></button>
              </li>
              <li>
                <button><Link to="/login">Iniciar sesión</Link></button>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;