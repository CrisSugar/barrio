import React from "react";
import AnyNotification from "../anyNotification/AnyNotification";
import Service from "../../services/Service";
import Axios from "axios";

export default class NotificationDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.service = new Service();
    this.state = {
      notification: null,
    };
  }

  componentDidMount() {
    console.log("entra en el didmount")
    Axios.get(
      `${process.env.REACT_APP_API_URL}/notification/${this.props.match.params.id}`
    ).then(response => {
      this.setState({
        notification: response.data
      });
    });
  }

  render() {
    // console.log(this.state.shops);
    // let notifications = [this.props.ShopDetail
    if(this.state.notification){
      return (
        <>
          <h4>{this.state.notification.neighbourhood}</h4> 
          <p>{this.state.notification.commentary}</p>
        </>
      );
    }else{
      return <h2>Cargando info...</h2>
    }
   
  }
}
