import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        // let {name, price, image} = this.props.product
        // console.log(this.props)
        return (
            <div>
                Product
                {this.props.item.product_name}
                {this.props.item.product_price}
                <img src={this.props.item.product_image} alt=""/>
            </div>
        )
    }
}

