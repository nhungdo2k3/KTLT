import React, { Component } from "react";

export default class CarList extends Component {
  handleClickChangeCar = this.props.handleChangeCar;
  renderCars = (cars) => {
    let result = cars.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <div className="card text-left">
            <img className="card-img-top" src={item.img} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.price}</p>
              <button
                type="button"
                className="btn btn-success"
                data-toggle="modal"
                data-target="#modelId"
                onClick={() => {
                  this.handleClickChangeCar(item);
                }}
              >
                Xem chi tiet
              </button>
            </div>
          </div>
        </div>
      );
    });
    return result;
  };
  render() {
    let cars = this.props.cars;
    return <React.Fragment>{this.renderCars(cars)}</React.Fragment>;
  }
}
