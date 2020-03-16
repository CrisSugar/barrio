import React from "react";
import "./AnyShop.css";
import { Link } from "react-router-dom";

function AnyShop(props) {
  // console.log(props)
  return (
    <div className="item">
      <ul className="list">
        <li>
          <img className="photo" src={props.imageUrl} alt="image"/>
        </li>
        <li className="li-neigh">
          <h4>{props.neighbourhood}</h4>
        </li>
        <li className="li-name"> 
          <h2>{props.name}</h2>
        </li>
        {/* <li>
          <p>{props.sector}</p>
        </li>
        <li>
          <p>{props.description}</p>
        </li> */}
        {/* <li>{props.offers}</li> */}
        {/* <li>
          <p>
            Contacto: Web: {props.web} Teléfono: {props.mobile}
          </p>
        </li> */}
        <div>
        <button><Link to={`/shop/${props._id}`}  className="link">Ver Tienda</Link></button>
        {/* <button><Link to="/shopdelete/:id" className="link">Borrar</Link></button> */}
      <button onClick={() => this.deleteAnyShop(this.state.shop._id)} className="link" >Borrar</button></div>
      </ul>
    </div>
  );
}

export default AnyShop;
