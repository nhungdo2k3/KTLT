import React, { Component } from "react";

export default class BaiTapTangGiamFont extends Component {
  state = {
    fontSize: 18,
  };
  handleTangGiamFontSize = (fSize) => {
    if (fSize === 1) {
      this.setState({
        fontSize: ++this.state.fontSize,
      });
    } else {
      this.setState({
        fontSize: --this.state.fontSize,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Bai tap: Tang giam font chu (Ap dung State)</h1>
        <button
          onClick={() => {
            this.handleTangGiamFontSize(1);
          }}
        >
          Tang(+)
        </button>
        <button
          onClick={() => {
            this.handleTangGiamFontSize(-1);
          }}
        >
          Giam(-)
        </button>
        <p style={{ fontSize: this.state.fontSize + "px" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro illo
          deserunt expedita repellat unde sit, cum aperiam earum. Nulla minima
          fugit iure similique officiis, dignissimos laudantium ipsam nisi
          ratione quo.
        </p>
      </div>
    );
  }
}
