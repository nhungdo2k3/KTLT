import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  arrDetailProduct = this.props.arr;
  renderHTML = () => {
    let result = this.arrDetailProduct.map((prod, index) => {
      return (
        <div className="col-3 mb-4" key={index}>
          <ProductItem
            nameProduct={prod.name}
            price={prod.price}
            image={prod.image}
          />
        </div>
      );
    });
    return result;
  };
  render() {
    return <div className="row pt-4">{this.renderHTML()}</div>;
  }
}
