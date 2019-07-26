import React, {Component} from 'react';
import Header from "./components/Header/Header"
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form"
import Product from "./components/Product/Product"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [{name: "one", price: "1", image: "img1"},
    {name: "two", price: "2", image: "img2"}]
    }
  }
  
  render () {
    return (
      <div className="App">
        <Header/>
        <Dashboard inventory={this.state.inventory}/>
        <Form/>
        <Product/>
      </div>
    )
  }
}

export default App;
