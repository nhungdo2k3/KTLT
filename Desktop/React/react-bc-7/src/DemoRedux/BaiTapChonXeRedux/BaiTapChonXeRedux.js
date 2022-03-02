import React, { Component } from "react";
import CarListRedux from "./CarListRedux";
import CarModalRedux from "./CarModalRedux";

let cars = [
  {
    id: 1,
    name: "black car",
    img: "./img_products_car/black-car.jpg",
    price: 1000,
  },
  {
    id: 2,
    name: "red car",
    img: "./img_products_car/red-car.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "silver car",
    img: "./img_products_car/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img_products_car/steel-car.jpg",
    price: 4000,
  },
];

export default class BaiTapChonXeRedux extends Component {
  render() {
    return (
      <div>
        <CarModalRedux />
        <CarListRedux carList={cars} />
      </div>
    );
  }
}
