import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      productImage: "",
      productName: "",
      productPrice: ""
    };
    this.cancel = this.cancel.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
  }

  addNewProduct= () => {
    let product_name = this.state.productName
    let product_price = this.state.productPrice
    let product_image = this.state.productImage
    axios
      .post("/api/inventory", { product_name, product_price, product_image} )
      .then(this.props.getInventory());
    this.cancel();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cancel() {
    this.setState({
      productImage: "",
      productName: "",
      productPrice: ""
    });
  }

  render() {
    return (
      <div>
        Form
        <form onSubmit={e => e.preventDefault()}>
          <input name="productName" placeholder="Product Name" onChange={e => this.handleChange(e)} />
          <input name="productPrice" placeholder="Product Price" onChange={e => this.handleChange(e)} />
          <input name="productImage" placeholder="Product Image" onChange={e => this.handleChange(e)} />
          <div className="but-add-cancel">
            <button onClick={this.cancel}>Cancel</button>
            <button onClick={this.addNewProduct}>Add to Inventory</button>
          </div>
        </form>
      </div>
    );
  }
}
