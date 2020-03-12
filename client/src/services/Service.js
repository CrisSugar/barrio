import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`
    });
  }

  getAllOffers = () => {
    return this.service
      .get("/offers")
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  getOffer = offerId => {
    return this.service
      .get(`/offer/${offerId}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  getAllNotifications = () => {
    return this.service
      .get("/notifications")
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  getNotification = notificationId => {
    return this.service
      .get(`/notification/${notificationId}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  getAllShops = () => {
    return this.service
      .get("/shops")
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  };

  getShop = shopId => {
    return this.service
      .get(`/shop/${shopId}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  };
}

//vale, lo que hemos hecho aqui es centralizar todas las peticiones axios para que solo dependan de una variable
//qeu está declarada en la linea 6, así no hay que estar cmabiando en todos los archivos :) gracias, pruebo ahra a ver si sigue el error de cors?

export default Service;
