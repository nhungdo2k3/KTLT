import React, { Component } from "react";
import { connect } from "react-redux";

class CarItemRedux extends Component {
  render() {
    console.log(this.props);
    let car = this.props.car;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={car.img} alt="" />

        <div className="card-body">
          <h4 className="card-title">{car.name}</h4>
          <p className="card-text">{car.price}</p>
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.viewDetail(car);
            }}
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewDetail: (carDetail) => {
      // console.log(carDetail);
      const action = {
        type: "XEM_CHI_TIET",
        carDetail: carDetail,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(CarItemRedux);
