import React, {Component} from "react";

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            imageURL: "",
            productName: "",
            price: ""
        }
        this.cancel = this.cancel.bind(this)
    }
    
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    cancel() {
        this.setState({
            imageURL: "",
            productName: "",
            price: ""
        })
    }

    render () {
        return (
            <div>
                Form
                <form onSubmit={e => e.preventDefault()}>
                    <input name="imageURL" onChange={e => this.handleChange(e)}></input>
                    <input name="productName" onChange={e => this.handleChange(e)}></input>
                    <input name="price" onChange={e => this.handleChange(e)}></input>
                    <div className="but-add-cancel">
                        <button onClick={this.cancel}>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </form>
            </div>
        )
    }
}