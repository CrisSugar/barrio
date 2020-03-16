import React from "react";
import Service from "../../services/Service";
import { Link } from "react-router-dom";

export default class NotificationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      notification: null
    };
  }

  componentDidMount() {
    this.service.getNotification(this.props.match.params.id).then(response => {
      this.setState({
        notification: response
      });
    });
  }

  render() {
    if (this.state.notification) {
      return (
        <div>
          <h4>{this.state.notification.neighbourhood}</h4>
          <p>{this.state.notification.commentary}</p>
          <button>
            <Link to="/notifications" className="link">
              Ver avisos
            </Link>
          </button>
        </div>
      );
    } else {
      return <h2>Cargando info...</h2>;
    }
  }
}
