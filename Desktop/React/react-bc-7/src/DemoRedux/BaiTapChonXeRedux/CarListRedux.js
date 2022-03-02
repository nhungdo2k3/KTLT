import React, { Component } from "react";
import CarItemRedux from "./CarItemRedux";

export default class CarListRedux extends Component {
  renderCarList = (cars) => {
    let result = cars.map((car) => {
      return (
        <div className="col-3" key={car.id}>
          <CarItemRedux car={car} />
        </div>
      );
    });
    return result;
  };
  render() {
    let carList = this.props.carList;
    return <div className="row">{this.renderCarList(carList)}</div>;
  }
}
