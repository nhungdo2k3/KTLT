import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let props = this.props;
    let styleNameProd = {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
    };
    return (
      <div className="card">
        <img class="card-img-top" src={props.image} alt="Card image cap" />
        <div class="card-body text-left">
          <h5 style={styleNameProd}>{props.nameProduct}</h5>
          <p>{props.price}</p>
          <button className="btn btn-dark">Add to cart</button>
        </div>
      </div>
    );
  }
}
