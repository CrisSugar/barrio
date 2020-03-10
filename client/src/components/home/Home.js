import React from "react";

import Axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default class HomeClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      shops: []
    };
  }

//   componentDidMount() {
//     Axios.get("http://localhost:5000/api/offers").then(response => {
//     this.setState({
//       offers: response.data,
//     });
//   }

  render() {
    return <div class="home-container">
        <Navbar></Navbar>
    </div>;
  }
}
