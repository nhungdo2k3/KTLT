import React, { Component } from "react";
import DemoChildren from "./DemoChildren";

export default class DemoPropsChildren extends Component {
  render() {
    return (
      <div>
        <DemoChildren>
          <p>Hello DemoChildren</p>
        </DemoChildren>
      </div>
    );
  }
}
