import React, { Component } from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import axios from "axios";
import {HashRouter} from "react-router-dom"
// import routes from "./routes";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      productName: "",
      productPrice: "",
      productImage: ""
    };
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => alert(err));
  }

  getInventory() {
    axios
      .get("/api/inventory")
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => alert(err));
  }

  render() {
    console.log(this.state.inventory);
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Dashboard
            inventory={this.state.inventory}
            getInventory={this.getInventory}
          />
          <Form getInventory={this.getInventory} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
