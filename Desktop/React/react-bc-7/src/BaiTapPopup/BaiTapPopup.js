import React, { Component } from "react";
import CarList from "./CarList";
import ModalCar from "./ModalCar";

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

export default class BaiTapPopup extends Component {
  state = cars[0];
  handleChangCar = (car) => {
    this.setState(car);
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center mt-3">Bài tập Xem popup (Áp dụng props)</h3>
        <div className="row mt-3">
          <CarList cars={cars} handleChangeCar={this.handleChangCar} />
        </div>
        <ModalCar car={this.state} />
      </React.Fragment>
    );
  }
}
