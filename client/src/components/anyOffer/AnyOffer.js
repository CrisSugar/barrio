import React from "react";
import { Link } from "react-router-dom";

function AnyOffer(props) {
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
export default AnyOffer;
