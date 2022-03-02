import React, { Component } from "react";
import GioHang from "./GioHang";
import ProductItem from "./ProductItem";
import TableProductDetail from "./TableProductDetail";

let dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

export default class BaiTapXemChiTiet extends Component {
  state = dataPhone[0];
  renderProd = () => {
    let result = dataPhone.map((item) => {
      return (
        <ProductItem
          key={item.maSP}
          prodDetail={item}
          handleClick={this.changeItemDetail}
        />
      );
    });
    return result;
  };

  changeItemDetail = (item) => {
    this.setState(item);
  };
  render() {
    return (
      <div>
        <GioHang />
        <h2 className="text-center my-3">
          Bài tập Xem chi tiết (Áp dụng Props)
        </h2>
        <div className="row">{this.renderProd()}</div>
        <div className="row mt-4">
          <TableProductDetail item={this.state} />
        </div>
      </div>
    );
  }
}
