import React from "react";
import "./AnyNotification.css";

function AnyNotification(props) {
  return (
 
      <ul className="cada-aviso">
        <li>
          <h4>{props.neighbourhood}</h4>
        </li>
        <li>
          <p>{props.commentary}</p>
        </li>
        {/* <Link to={`/notification/${props._id}`} className="link">Ver Aviso</Link> */}
      </ul>

  );
}

export default AnyNotification;
