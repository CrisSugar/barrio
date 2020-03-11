import React from "react";
import Axios from "axios";
import {Link} from "react-router-dom";


function AnyOffer(props) {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     offer : {}
  //   };
  // }

  // componentDidMount(){
  //   Axios.get('${process.env.REACT_APP_API_URL}/offer/${offer.id}').then(offer => {
  //     this.setState({
  //       offer : offer.data
  //     });
  //   });
  // }

  
    return (
      <div>
        {/* <img src={props.image_url} alt="" /> */}
        <ul>
          <li>
            <p>{props.neighbourhood}</p>
          </li>
          <li>
            <h4>{props.shop}</h4>
          </li>
          <li>
            <h2>{props.product}</h2>
          </li>
          <li>
            <p> Precio : {props.prize}</p>
          </li>
          <li>
            <p> Precio oferta: {props.offerPrize}</p>
          </li>
          <Link to={`/offer/${props._id}`}>Ver Oferta</Link>
        </ul>
      </div>
    );
  }
  export default AnyOffer
