import React from "react";
import Service from "../../services/Service";
import "./AnyShop.css";
import { Link } from "react-router-dom";

// function AnyShop(props) {
export default class AnyShop extends React.Component {
  // console.log(props)
  constructor(props) {
    super(props);
    this.service = new Service();
    this.state = {
      shop: null
    };
  }

  // componentDidMount() {
  //   this.service.getShop(this.props.match.params.id).then(response => {
  //         this.setState({
  //       shop: response
  //     });
  //   });
  // }

  deleteShop = id => {
    this.service
      .deleteShop(id)
      .then(() => this.props.deletedShop())
      .catch(err => console.log(err));
  };

  render() {
    return (
      // <div className="item">
        <div className="cadafila">
          <ul className="list">
            <li>
              <img className="photo" src={this.props.imageUrl} alt="image" />
            </li>
            <li className="li-neigh">
              <h4>{this.props.neighbourhood}</h4>
            </li>
            <li className="li-name">
              <h2>{this.props.name}</h2>
            </li>
            <div>
              <button>
                <Link to={`/shop/${this.props._id}`} className="link">
                  Ver Tienda
                </Link>
              </button>
              {/* <button><Link to="/shopdelete/:id" className="link">Borrar</Link></button> */}
              {this.props.userInSession.role === "owner" && (
                <button
                  onClick={() => this.deleteShop(this.props._id)}
                  className="link">
                  Borrar
                </button>
              )}
            </div>
          </ul>
        {/* </div> */}
      </div>
    );
  }
}
