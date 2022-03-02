import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    let item = this.props.prodDetail;
    let handleClick = this.props.handleClick;
    return (
      <div className="col-4" key={item.maSP}>
        <div className="card text-left">
          <img
            className="card-img-top"
            src={item.hinhAnh}
            alt=""
            height={350}
          />
          <div className="card-body">
            <h4 className="card-title">{item.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.xemChiTietSP(item);
              }}
            >
              Chi tiết
            </button>
            <button
              className="btn btn-primary ml-2"
              onClick={() => {
                this.props.themGioHang(item);
              }}
            >
              Them gio hang
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTietSP: (spClick) => {
      const action = {
        type: "XEM_CHI_TIET_SP",
        spClick: spClick,
      };
      dispatch(action);
    },
    themGioHang: (spThem) => {
      const action = {
        type: "THEM_GIO_HANG",
        spThem: spThem,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
