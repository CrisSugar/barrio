import React from "react";
// import Axios from "axios";

export default class AnyShop extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     shop : {}
  //   };
  // }

  // componentDidMount(){
  //   Axios.get("http://localhost:5000/api/shop/${shop.id}").then(shop => {
  //     this.setState({
  //       shop : shop.data
  //     });
  //   }); 
  // }


  render() {
    return (
      <div>
          {/* <img src={this.props.anyshops.image_url} alt="" /> */}
          <ul>
            <li>
              <p>{this.props.anyshops.neighbourhood}</p>
            </li>
            <li>
              <h4>{this.props.anyshops.sector}</h4>
            </li>
            <li>
              <h2>{this.props.anyshops.name}</h2>
            </li>
            <li>
              <p>{this.props.anyshops.description}</p>
            </li>
            <li>
              <p>
                Contacto: Web: {this.props.anyshops.web}  Teléfono: {this.props.anyshops.mobile}
              </p>
            </li>
          </ul>

         
        
          

      </div>
    );
  }
}
