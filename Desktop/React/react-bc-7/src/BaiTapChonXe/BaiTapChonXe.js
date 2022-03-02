import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImage: "./img_products_car/black-car.jpg",
  };

  handleChangeCar = (colorChange) => {
    this.setState({
      srcImage: "./img_products_car/" + colorChange + "-car.jpg",
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Bai tap: Chon xe (Ap dung State)</h1>
        <div className="row">
          <div className="col-6">
            <img src={this.state.srcImage} style={{ width: "100%" }} />
          </div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "black" }}
                  onClick={() => {
                    this.handleChangeCar("black");
                  }}
                >
                  Black
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    this.handleChangeCar("red");
                  }}
                >
                  Red
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "silver" }}
                  onClick={() => {
                    this.handleChangeCar("silver");
                  }}
                >
                  Silver
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "grey" }}
                  onClick={() => {
                    this.handleChangeCar("steel");
                  }}
                >
                  Steel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
