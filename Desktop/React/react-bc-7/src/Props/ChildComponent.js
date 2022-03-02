import React, { Component } from "react";

export default class ChildComponent extends Component {
  render() {
    let sanPham = this.props.detailInfor;
    return (
      <div className="card">
        <div className="card-header">
          <img src={sanPham.image} width={"100%"} />
        </div>
        <div class="card-body">
          <h5 class="card-title">{sanPham.tenSanPham}</h5>
          <p class="card-text">{sanPham.giaSanPham}</p>
        </div>
      </div>
    );
  }
}
