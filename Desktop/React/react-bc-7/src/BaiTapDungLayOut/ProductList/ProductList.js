import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
