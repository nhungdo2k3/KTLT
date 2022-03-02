import React, { Component } from "react";

export default class RenderWithMap extends Component {
  arrProduct = [
    {
      id: 1,
      name: "iphone",
      price: 1000,
      img: "http://placeimg.com/640/480/people",
    },
    {
      id: 2,
      name: "samsung",
      price: 2000,
      img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1060.jpg",
    },
    {
      id: 3,
      name: "xiaomi",
      price: 3000,
      img: "http://placeimg.com/640/480/animals",
    },
    {
      id: 4,
      name: "nokia",
      price: 4000,
      img: "http://placeimg.com/640/480/cats",
    },
  ];
  renderProduct = () => {
    let arrHTML = this.arrProduct.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} alt={product.name} width={50} height={50} />
          </td>
        </tr>
      );
    });
    return arrHTML;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name Product</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
