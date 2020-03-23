import React from "react";
import "./AnyOffer.css";

function AnyOffer(props) {
  return (
    // <div className="item">
      // {/* <div className="cadafila"> */}
        <ul className="cada-offer">
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

          {/* <Link to={`/offer/${props._id}`} className="link">Ver Oferta</Link> */}
          {/* <Link to={`/shop/${AnyShop._id}`} className="link">Ver Tienda</Link> */}
        </ul>
    //   </div>
    // </div>
  );
}
export default AnyOffer;
