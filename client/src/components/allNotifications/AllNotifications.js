import React from "react";
import AnyNotification from "../anyNotification/AnyNotification";
import Service from "../../services/Service";
import Axios from "axios";

export default class AllNotifications extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    Axios.get('${process.env.REACT_APP_API_URL}/notifications').then(response => {
      this.setState({
        notifications: response.data
      });
    });
}

    
    render() {
        console.log(this.state.notifications)
       
    
    return (
        <>
        
        {this.state.notifications.map(anynotifications => (
          <AnyNotification key={anynotifications._id} {...anynotifications} />
        ))} 
        </>
   
      
 )
  }
}