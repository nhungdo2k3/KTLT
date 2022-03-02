import React, { Component } from "react";

export default class LoginForm extends Component {
  // state la thuoc tinh co san cua react class component, chua cac gia tri thay doi tren giao dien khi nguoi dung thao tac
  state = {
    isLogin: false,
  };
  userName = "Minh";
  renderFormLogin = () => {
    if (this.state.isLogin) {
      return <div>Hello {this.userName}</div>;
    }
    return <button onClick={this.handleLogin}>Login</button>;
  };

  handleLogin = async () => {
    await this.setState({
      isLogin: true,
    });
    // Ham se duoc chay sau khi state duoc thay doi va giao dien duoc render lai
    console.log(this.state.isLogin);
  };
  render() {
    return (
      <div className="container">
        {/* {this.isLogin ? (
          <div>Hello {this.userName}</div>
        ) : (
          <button>Login</button>
        )} */}

        {this.renderFormLogin()}
      </div>
    );
  }
}
