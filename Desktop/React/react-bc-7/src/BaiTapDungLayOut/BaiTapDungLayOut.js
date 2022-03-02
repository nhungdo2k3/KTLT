import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
import Slider from "./Slider/Slider";
import "./css/style.css";

export default class BaiTapDungLayOut extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Slider />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
