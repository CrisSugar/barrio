import React from "react";
import AnyShop from "../anyShop/AnyShop";
import Service from "../../services/Service";
import Axios from "axios";

export default class AllShops extends React.Component {
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      shops: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/shops").then(response => {
      this.setState({
        shops: response.data
      });
    });
}

    
    render() {
        console.log(this.state.shops)
        // let shops = [this.props.allShops
    
    return (
        <>
        
        {this.state.shops.map(anyshops => (
          <AnyShop key={anyshops._id} {...anyshops}/>
        ))} 

        

        </>
   
      
 )
  }
}

