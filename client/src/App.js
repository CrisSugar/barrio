import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import logo from "./logo.svg";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Authorization from "./components/auth/Authorization";
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
// import AddOne from "./components/addOne/AddOne";
import AddShop from "./components/addShop/AddShop";
import AddOffer from "./components/addOffer/AddOffer";
import AddNotification from "./components/addNotification/AddNotification";
import GoogleMaps from "./components/googleMap/GoogleMaps";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = {
      loggedInUser: null,
      userType: "none",
      homeClient: ["client"],
      homeOwner: ["owner"]
    };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    console.log(userObj);
    this.setState({
      loggedInUser: userObj
    });
  };

  selectUserType = userType => {
    this.setState({
      userType: userType
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
        console.log("entra en el then");
        console.log(response);

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
    if (this.state.loggedInUser)
    //  && this.state.userType === "owner") 
     {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          {/* <Redirect to="/homeOwner" /> */}
          <div>
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />
            <div className="App">
              
              <Switch>
                {/* <Route exact path="/home" render={() => <Home></Home>} /> */}

                <Route
                  exact
                  path="/maps"
                  render={() => <GoogleMaps></GoogleMaps>}
                />
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
                  render={() => (
                    // <AllShops loggedinUser={this.state.loggedInUser}></AllShops>
                    <AllShops></AllShops>
                  )}
                />
                <Route
                  exact
                  path="/shop/new"
                  render={() => <AddShop></AddShop>}
                />
                <Route
                  exact
                  path="/shop/:id"
                  render={match => <ShopDetail {...match}></ShopDetail>}
                />
                <Route
                  exact
                  path="/shop/delete"
                  render={() => <AllShops></AllShops>}
                />
                <Route
                  exact
                  path="/offers"
                  render={() => <AllOffers></AllOffers>}
                />
                <Route
                  exact
                  path="/offer/new"
                  render={() => <AddOffer></AddOffer>}
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
                  path="/notification/new"
                  render={() => <AddNotification></AddNotification>}
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
          </div>
        </React.Fragment>
      );
    } 
    
    // if ((this.state.loggedInUser) && (this.state.userType === "cliente")){

    //   return (
    //     <React.Fragment>
    //       <Redirect to="/homeClient" />
    //       <div>
    //         <Navbar
    //           userInSession={this.state.loggedInUser}
    //           logout={this.logout}
    //         />
    //         <div className="App">
              
    //           <Switch>
    //             {/* <Route exact path="/home" render={() => <Home></Home>} /> */}

    //             <Route
    //               exact
    //               path="/maps"
    //               render={() => <GoogleMaps></GoogleMaps>}
    //             />
    //             <Route
    //               exact
    //               path="/homeowner"
    //               render={() => <HomeOwner></HomeOwner>}
    //             />
    //             <Route
    //               exact
    //               path="/homeclient"
    //               render={() => <HomeClient></HomeClient>}
    //             />
    //             <Route
    //               exact
    //               path="/shops"
    //               render={props => (
    //                 <AllShops loggedinUser={this.state.loggedInUser}></AllShops>
    //               )}
    //             />
    //             <Route
    //               exact
    //               path="/shop/new"
    //               render={() => <AddShop></AddShop>}
    //             />
    //             <Route
    //               exact
    //               path="/shop/:id"
    //               render={match => <ShopDetail {...match}></ShopDetail>}
    //             />
    //             <Route
    //               exact
    //               path="/shop/delete"
    //               render={() => <AllShops></AllShops>}
    //             />
    //             <Route
    //               exact
    //               path="/offers"
    //               render={() => <AllOffers></AllOffers>}
    //             />
    //             <Route
    //               exact
    //               path="/offer/new"
    //               render={() => <AddOffer></AddOffer>}
    //             />
    //             <Route
    //               exact
    //               path="/offer/:id"
    //               render={match => <OfferDetail {...match}></OfferDetail>}
    //             />
    //             <Route
    //               exact
    //               path="/notifications"
    //               render={() => <AllNotifications></AllNotifications>}
    //             />
    //             <Route
    //               exact
    //               path="/notification/new"
    //               render={() => <AddNotification></AddNotification>}
    //             />
    //             <Route
    //               exact
    //               path="/notification/:id"
    //               render={match => (
    //                 <NotificationDetail {...match}></NotificationDetail>
    //               )}
    //             />
    //           </Switch>
    //         </div>
    //       </div>
    //     </React.Fragment>
    //   );
    // } 
  
    

    else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <div className="App">
            <Navbar logout={this.logout} />

            <header className="App-header">
              <Switch>
                <Route
                  exact
                  path="/signup"
                  render={() => <Signup getUser={this.getUser} />}
                />
                <Route
                  exact
                  path="/login"
                  render={() => <Login getUser={this.getUser} />}
                />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }

}
export default App;
