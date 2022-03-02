import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DemoProps extends Component {
  render() {
    let sp1 = {
      tenSanPham: "Iphone",
      giaSanPham: 1000,
      image: "http://placeimg.com/640/480/city",
    };
    let sp2 = {
      tenSanPham: "SamSung",
      giaSanPham: 1200,
      image: "http://placeimg.com/640/480/animals",
    };
    return (
      <div className="row pt-3">
        <div className="col-3">
          <ChildComponent detailInfor={sp1} />
        </div>
        <div className="col-3">
          <ChildComponent detailInfor={sp2} />
        </div>
      </div>
    );
  }
}
