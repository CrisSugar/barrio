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

  getAddShop = shop => {
    return this.service
      .post("/shop/new", shop)
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  getAddOffer = offer => {
    return this.service
      .post("/offer/new", offer)
      .then(response => response.data)
      .catch(error => console.log(error));
  };

  getAddNotification = notification => {
    return this.service
      .post("/notification/new", notification)
      .then(response => response.data)
      .catch(error => console.log(error));
  };


  deleteShop = (id) => {
    return this.service.delete(`/shopdelete/${id}`)
    .then(response => response.data)
  }



  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return this.service.post("/upload", theFile).then(res => res.data);
    // .catch(errorHandler);
  }

  saveNewShop(newShop) {
    // console.log('new shop is: ', newShop)
    return this.service.post("/shop/new", newShop).then(res => res.data);
    // .catch(errorHandler);
  }
}


export default Service;
