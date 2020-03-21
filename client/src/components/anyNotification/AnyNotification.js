import React from "react";

function AnyNotification(props) {
  return (
    <div>
      <ul>
        <li>
          <h4>{props.neighbourhood}</h4>
        </li>
        <li>
          <p>{props.commentary}</p>
        </li>
        {/* <Link to={`/notification/${props._id}`} className="link">Ver Aviso</Link> */}
      </ul>
    </div>
  );
}

export default AnyNotification;
