import React, { Component } from "react";
import { connect } from "react-redux";

class TableProductDetail extends Component {
  render() {
    let product = this.props.item;
    return (
      <React.Fragment>
        <div className="col-5">
          <h3>Tên sản phẩm</h3>
          <img src={this.props.spChiTiet.hinhAnh} style={{ width: "100%" }} />
        </div>
        <div className="col-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table" width={"100%"}>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{this.props.spChiTiet.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{this.props.spChiTiet.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{this.props.spChiTiet.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{this.props.spChiTiet.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{this.props.spChiTiet.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{this.props.spChiTiet.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    spChiTiet: rootReducer.productDetailReducer,
  };
};

export default connect(mapStateToProps)(TableProductDetail);
