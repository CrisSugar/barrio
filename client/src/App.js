// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import AllShops from "./components/allShops/AllShops";
import AnyShop from "./components/anyShop/AnyShop";
import AllOffers from "./components/allOffers/AllOffers";
import AnyOffer from "./components/anyOffer/AnyOffer";
import AllNotifications from "./components/allNotifications/AllNotifications";
import AnyNotification from "./components/anyNotification/AnyNotification";
import ShopDetail from "./components/shopDetail/ShopDetail";
import OfferDetail from "./components/offerDetail/OfferDetail";
import NotificationDetail from "./components/notificationDetail/NotificationDetail";
import HomeClient from "./components/homeClient/HomeClient";
import HomeOwner from "./components/homeOwner/HomeOwner";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    // if (this.state.loggedInUser) {
    //en este caso mostramos los contenidos ya que hay usuario
    return (
      <React.Fragment>
        {/* <Redirect to="/home" /> */}

        <div className="App">
          {/* <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              /> */}
          {/* aqui simplemente se muestra un lorem ipsum genérico para que veáis contenidos que solo se muestran a usuarios logeados */}
          {/* <Contents /> */}
          <Switch>
            {/* <Route
              exact
              path=""
              render={() => <Home></Home>}
            /> */}

            <Route
              exact
              path="/homeowner"
              render={() => <HomeOwner></HomeOwner>}
            />
            <Route
              exact
              path="/homeclient"
              render={() => <HomeClient></HomeClient>}
            />

            <Route
              exact
              path="/shops"
              render={props => (
                <AllShops loggedinUser={this.state.loggedInUser}></AllShops>
              )}
            />

            <Route
              exact
              path="/shop/:id"
              render={match => <ShopDetail {...match}></ShopDetail>}
            />

            <Route
              exact
              path="/offers"
              render={() => <AllOffers></AllOffers>}
            />

            <Route
              exact
              path="/offer/:id"
              render={match => <OfferDetail {...match}></OfferDetail>}
            />

            <Route
              exact
              path="/notifications"
              render={() => <AllNotifications></AllNotifications>}
            />

            <Route
              exact
              path="/notification/:id"
              render={match => (
                <NotificationDetail {...match}></NotificationDetail>
              )}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
    // } else {
    //   //si no estás logeado, mostrar opcionalmente o login o signup
    //   return (
    //     <React.Fragment>
    //      <Redirect to="/login" />

    //       <div className="App">
    //         <header className="App-header">
    //           <Navbar
    //             userInSession={this.state.loggedInUser}
    //             logout={this.logout}
    //           />
    //           <Switch>
    //             <Route
    //               exact
    //               path="/signup"
    //               render={() => <Signup getUser={this.getUser} />}
    //             />
    //             <Route
    //               exact
    //               path="/login"
    //               render={() => <Login getUser={this.getUser} />}
    //             />
    //           </Switch>
    //         </header>
    //       </div>
    //     </React.Fragment>
    //   );
    // }
  }
}

export default App;
