import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(this.props.getInventory())
      .catch(() => alert("Can't Delete"));
  }

  render() {
    // console.log(this.props);
    let inventory = this.props.inventory.map(product => (
      <div>
        <Product
          key={product.id}
          item={product}
          deleteProduct={this.deleteProduct}
        />
      </div>
    ));
    return <div>{inventory}</div>;
  }
}
