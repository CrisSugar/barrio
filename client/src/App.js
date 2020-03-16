import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import AllShops from "./components/allShops/AllShops";
import AllOffers from "./components/allOffers/AllOffers";
import AllNotifications from "./components/allNotifications/AllNotifications";
import ShopDetail from "./components/shopDetail/ShopDetail";
import OfferDetail from "./components/offerDetail/OfferDetail";
import NotificationDetail from "./components/notificationDetail/NotificationDetail";
import HomeClient from "./components/homeClient/HomeClient";
import HomeOwner from "./components/homeOwner/HomeOwner";
import AddShop from "./components/addShop/AddShop";
import AddOffer from "./components/addOffer/AddOffer";
import AddNotification from "./components/addNotification/AddNotification";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { loggedInUser: null, navigate: false };

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
      this.setState({ loggedInUser: null, navigate: true }, () =>
        console.log(this.state)
      );
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


    if (this.state.loggedInUser) {
      // if (this.state.loggedInUser.role === "owner") {
      return (
        <React.Fragment>
          <Redirect to="/homeowner" />

          <div className="App">
            <Navbar
              userInSession={this.state.loggedInUser}
              // getUser={this.getUser}
              logout={this.logout}
              {...this.props}
            />
            
            <main className="container">
              <Switch>
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
            </main>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/signup" />
          <div className="App">
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout} {...this.props}
            />
            <main className="container">
            <Switch>
              <Route
                exact
                path="/signup"
                render={() => <Signup getUser={this.getUser} />}
              />
              <Route
                exact
                path="/login"
                render={(props) => <Login getUser={this.getUser} {...props}/>}
              />
            </Switch>
            </main>
            {(this.state.navigate) && <Redirect to="/signup" push="true"/>}
          </div>
        </React.Fragment>
      );
    }
  }
}
export default App;
