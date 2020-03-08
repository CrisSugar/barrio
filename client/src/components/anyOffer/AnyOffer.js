import React from "react";
// import Axios from "axios";

export default class AnyOffer extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     offer : {}
  //   };
  // }

  // componentDidMount(){
  //   Axios.get("http://localhost:5000/api/offer/${offer.id}").then(offer => {
  //     this.setState({
  //       offer : offer.data
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        {/* <img src={this.props.anyoffers.image_url} alt="" /> */}
        <ul>
          <li>
            <p>{this.props.anyoffers.neighbourhood}</p>
          </li>
          <li>
            <h4>{this.props.anyoffers.shop}</h4>
          </li>
          <li>
            <h2>{this.props.anyoffers.product}</h2>
          </li>
          <li>
            <p>{this.props.anyoffers.prize}</p>
          </li>
          <li>
            <p>{this.props.anyoffers.offerPrize}</p>
          </li>
        </ul>
      </div>
    );
  }
}
