import React, { Component } from "react";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  render() {
    console.log(this.props);
    let inventory = this.props.inventory.map(product => (
      <div>
        <Product key={product.id} item={product}/>
      </div>
    ));
    return (
      <div>
        {inventory}
      </div>
    );
  }
}
