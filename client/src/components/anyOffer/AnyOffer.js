import React from "react";

function AnyOffer(props) {
  return (
    <div>
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
        
        
        {/* <Link to={`/offer/${props._id}`} className="link">Ver Oferta</Link> */}
        {/* <Link to={`/shop/${AnyShop._id}`} className="link">Ver Tienda</Link> */}
      </ul>
    </div>
  );
}
export default AnyOffer;
