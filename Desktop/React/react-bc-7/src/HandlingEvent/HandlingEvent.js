import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handleSayHello = () => {
    alert("Say Hi");
  };

  handleSayName = (name) => {
    alert("Say " + name);
  };
  render() {
    const handleClick = () => {
      alert("123");
    };

    return (
      <div>
        <button
          className="btn btn-success btn-round"
          onClick={this.handleSayHello}
        >
          Say Hello
        </button>
        <button
          className="btn btn-warning btn-round ml-2"
          onClick={() => {
            this.handleSayName("Minh");
            this.handleSayHello();
          }}
        >
          Hi + name
        </button>
        <button className="btn btn-danger btn-round ml-2" onClick={handleClick}>
          Message 123
        </button>
      </div>
    );
  }
}
