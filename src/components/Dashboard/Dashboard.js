import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        {this.props.inventory[0] !== null
          ? this.props.inventory.map(el => (
              <Product/>
            ))
          : "No results found"}
      </div>
    );
  }
}
