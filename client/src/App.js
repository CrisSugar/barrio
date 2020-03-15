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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: null

      // loggedInUser: null
      // role: "none",
      // homeClient: ["client"],
      // homeOwner: ["owner"]
    };
    this.service = new AuthService();

    this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
      // role: userObj.role
    });
  };

  // selectUserType = userType => {
  //   this.setState({
  //     userType: userType
  //   });
  // };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null }, () => console.log(this.state));
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        // console.log("entra en el then");
        // console.log(response);
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
    const { loggedInUser } = this.state;
    const { logout } = this;

    if (loggedInUser) {
      // if (this.state.loggedInUser.role === "owner") {
      return (
        <React.Fragment>
          {/* <Redirect to="/homeOwner" /> */}
          <Switch>
            <div className="App">
              <Navbar
                userInSession={loggedInUser}
                getUser={this.getUser}
                logout={logout}
              />{" "}
              {/* <Route exact path="/" render={() => <Home></Home>} /> */}
              {/* <Route
                  exact
                  path="/maps"
                  render={() => <GoogleMaps></GoogleMaps>}
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
            </div>
          </Switch>
        </React.Fragment>
      );

    } else {
      return (
        <React.Fragment>
          <div className="App">
            <Navbar logout={this.logout} />
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
          </div>
        </React.Fragment>
      );
    }
  }
}
export default App;
