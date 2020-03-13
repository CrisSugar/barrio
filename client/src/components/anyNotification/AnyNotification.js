import React from "react";
import { Link } from "react-router-dom";
function AnyNotification(props) {
  return (
    <div>
      {/* <img src={props.anyshops.image_url} alt="" /> */}
      <ul>
        <li>
          <h4>{props.neighbourhood}</h4>
        </li>
        <li>
          <p>{props.commentary}</p>
        </li>
        {/* <Link to={`/notification/${props._id}`}>Ver Aviso</Link> */}
      </ul>
    </div>
  );
}

export default AnyNotification;
