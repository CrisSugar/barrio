import React from "react";
import AnyNotification from "../anyNotification/AnyNotification";
import Service from "../../services/Service";

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
        return notification.neighbourhood.includes("Centro");
      });
      this.setState({
        notifications: filteredNotifications
      });
    });
  }

  render() {
    console.log(this.state.notifications);

    return (
      <>
        {this.state.notifications.map(anynotifications => (
          <AnyNotification key={anynotifications._id} {...anynotifications} />
        ))}
      </>
    );
  }
}
