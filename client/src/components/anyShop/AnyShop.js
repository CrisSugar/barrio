import React from "react";
import {Link} from "react-router-dom";
function AnyShop(props) {

    return (
      <div>

            
          {/* <img src={props.anyshops.image_url} alt="" /> */}
          <ul>
            <li>
              <h4>{props.neighbourhood}</h4>
            </li>
            <li>
              <h2>{props.name}</h2>
            </li>
            <li>
              <p>{props.sector}</p>
            </li>
            <li>
              <p>{props.description}</p>
            </li>
            {/* <li>{props.offers}</li> */}
            <li>
              <p>
                Contacto: Web: {props.web}  Teléfono: {props.mobile}
              </p>
            </li>
            <Link to={`/shop/${props._id}`}>Ver Tienda</Link>
          </ul>

         
        
          

      </div>
    );
  
}

export default AnyShop