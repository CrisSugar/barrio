import React from "react";
import AnyNotification from "../anyNotification/AnyNotification";
import Service from "../../services/Service";
import { Link } from "react-router-dom";


export default class AllNotifications extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    this.service.getAllNotifications().then(response => {
      let filteredNotifications;
      filteredNotifications = response.filter(notification => {
        return notification.neighbourhood.includes("");
      });
      this.setState({
        notifications: filteredNotifications
      });
    });
  }

  render() {
    console.log(this.state.notifications);

    return (
      <div>
        {this.state.notifications.map(anynotifications => (
          <AnyNotification key={anynotifications._id} {...anynotifications} />
        ))
        }
        {/* {this.props.userInSession.role === "owner" && */}
        <button><Link to={'/notification/new'} className="link">Crear aviso</Link></button>
        {/* } */}
      </div>
    );
  }
}
