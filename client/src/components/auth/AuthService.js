import axios from "axios";
import { Redirect } from "react-router";

class AuthService {
  constructor() {

    let xxx = `${process.env.REACT_APP_API_URL}/auth`

    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
  }

  signup = (username, password, neighbourhood, role) => {
    return this.service
      .post("/signup", { username, password, neighbourhood, role})
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => response.data);
  };

  loggedin = () => { 
    return this.service.get("/currentUser") 
    .then( response => response.data);
  };

  loggedin = () => { 
    return this.service.get("/home") 
    .then( response => response.data);
  };

  loggedin = () => { 
    return this.service.get("/userInSession") 
    .then( response => response.data);
  };
  



  logout = () => {
    return this.service.post("/logout")
    .then(response => response.data);
  };
}

export default AuthService;
