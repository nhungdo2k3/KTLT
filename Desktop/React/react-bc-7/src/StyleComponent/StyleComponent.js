import React, { Component } from "react";

import style from "./Style.module.css";

export default class StyleComponent extends Component {
  render() {
    return <div className={style["p-color-blue"]}>Hello FrontEnd 70</div>;
  }
}
