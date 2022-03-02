import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderGioHang = (carts) => {
    let result = carts.map((item) => {
      return (
        <tr key={item.maSP}>
          <td>{item.maSP}</td>
          <td>
            <img src={item.hinhAnh} height={50} />
          </td>
          <td>{item.tenSP}</td>
          <td>{item.giaBan}</td>
          <td>{item.soLuong}</td>
          <td>{item.giaBan * item.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaSP(item);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    if (result.length === 0) {
      return (
        <tr>
          <td colSpan={6} className="text-center">
            Gio hang trong!
          </td>
        </tr>
      );
    }
    return result;
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Ma san pham</th>
            <th>Hinh anh</th>
            <th>Ten san pham</th>
            <th>Don gia</th>
            <th>So luong</th>
            <th>Thanh tien</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang(this.props.gioHang)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.cartReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaSP: (spClick) => {
      const action = {
        type: "XOA_SAN_PHAM",
        spClick: spClick,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
