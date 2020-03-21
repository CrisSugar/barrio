import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/signup/Signup";
import SignupClient from "./components/auth/SignupClient";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import AllShops from "./components/allShops/AllShops";
import AllOffers from "./components/allOffers/AllOffers";
import AllNotifications from "./components/allNotifications/AllNotifications";
import ShopDetail from "./components/shopDetail/ShopDetail";
import OfferDetail from "./components/offerDetail/OfferDetail";
import NotificationDetail from "./components/notificationDetail/NotificationDetail";
import Home from "./components/home/Home";
import Barrio from "./components/landing/Barrio";
import AddShop from "./components/addShop/AddShop";
import AddOffer from "./components/addOffer/AddOffer";
import AddNotification from "./components/addNotification/AddNotification";





class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, navigate: false };
    this.service = new AuthService();
    //this.fetchUser();
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    })
   // this.fetchUser();
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState(
        { loggedInUser: null, navigate: true }
        // console.log(this.state)
       
      );
    });
  };

  // fetchUser() {
  //   return this.service
  //     .loggedin()
  //     .then(response => {
  //       // console.log("entra en el then");
  //       // console.log(response);
  //       this.setState({
  //         loggedInUser: response
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         loggedInUser: false
  //       });
  //     });
  // }

  render() {
    if (this.state.loggedInUser) {
      // if (this.state.loggedInUser.role === "owner") {
      return (
        <React.Fragment>
          <div className="App">
            <Redirect to="/home" />
            <Navbar userInSession={this.state.loggedInUser} logout={()=>this.logout()} {...this.props}/>
            <main className="container">
              <Switch>
                <Route exact path="/home" render={() => ( <Home userInSession={this.state.loggedInUser} getUser={this.getUser}></Home>)}/>
                <Route exact path="/shops" render={() => ( <AllShops userInSession={this.state.loggedInUser} getUser={this.getUser}></AllShops>)}/>
                <Route exact path="/offers" render={() => ( <AllOffers userInSession={this.state.loggedInUser} getUser={this.getUser}></AllOffers>)}/>
                <Route exact path="/shop/new" render={() => ( <AddShop userInSession={this.state.loggedInUser} getUser={this.getUser}></AddShop>)}/>
                <Route exact path="/shop/:id" render={match => (<ShopDetail userInSession={this.state.loggedInUser} getUser={this.getUser} {...match}></ShopDetail>)}/>
                <Route exact path="/shopdelete/:id" render={(props) => (<AllShops userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}></AllShops>)}/>
                <Route exact path="/offer/new" render={() => (<AddOffer userInSession={this.state.loggedInUser} getUser={this.getUser}></AddOffer>)}/>
                <Route exact path="/offer/:id" render={(props) => ( <OfferDetail userInSession={this.state.loggedInUser} getUser={this.getUser} {...props}/>)}/>
                <Route exact path="/notifications" render={() => (<AllNotifications userInSession={this.state.loggedInUser} getUser={this.getUser}/>)}/>
                <Route exact path="/notification/new" render={() => (<AddNotification userInSession={this.state.loggedInUser} getUser={this.getUser}></AddNotification>)}/>
                <Route exact path="/notifications/:id" render={() => (<NotificationDetail userInSession={this.state.loggedInUser} getUser={this.getUser}></NotificationDetail>)}/>
              </Switch>
            </main>
          </div>
        </React.Fragment>
      );
    } else { 
      return (
        <React.Fragment>
          <Redirect to="/barrio" />
          <div className="App">
            <Navbar/>
            <main className="container">
              <Switch>
                <Route exact path="/barrio" render={() => <Barrio getUser={this.getUser} />}/>
                <Route exact path="/login" render={props => <Login getUser={this.getUser} {...props} />}/>
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />}/>
                <Route exact path="/signupClient" render={() => <SignupClient getUser={this.getUser} />}/>
              </Switch>
            </main>
            {this.state.navigate && <Redirect to="/barrio" push="true" />}
          </div>
        </React.Fragment>
      );
    }
  }
}
export default App;
