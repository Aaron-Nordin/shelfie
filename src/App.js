import React, {Component} from 'react';
import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form"
import Product from "./components/Product/Product"
import axios from "axios"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
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
  
  render () {
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
      </div>
    )
  }
}

export default App;
