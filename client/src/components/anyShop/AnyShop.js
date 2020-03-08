import React from "react";

export default class AnyShop extends React.Component {
  render() {
    return (
      <div>
          {/* <img src={this.props.image_url} alt="" /> */}
          <ul>
            <li>
              <p>{this.props.anyshops.neighbourhood}></p>
            </li>
            <li>
              <h4>{this.props.anyshops.sector}</h4>
            </li>
            <li>
              <h2>{this.props.anyshops.name}</h2>
            </li>
            {/* <li>
              <p>{this.props.description}</p>
            </li>
            <li>
              <p>
                Contacto:{this.props.web} {this.props.mobile}
              </p>
            </li> */}
          </ul>

      </div>
    );
  }
}
