import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import './Home.css';
import Axios from "axios";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  componentDidMount() {
    Axios.get('${process.env.REACT_APP_API_URL}/offers')
    .then(response => {
    this.setState({
      offers: response.data,
    });
  })}


  render() {
    return (

    <div className="home-container">

        <Navbar></Navbar>
        {/* {this.state.offers.map(offer => {
            return <h1>{offer.shop}</h1>
        })} */}
        <p>el perro del hortlano
        </p>

    </div>
      )

  }
}
