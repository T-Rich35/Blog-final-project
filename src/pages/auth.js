import React, { Component } from "react";
import Login from "../components/login";

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }

  render() {
    return (
      <div className="login">
        <span className="logintitle">LOGIN</span>
        <Login
          handleSuccessfulAuth={this.handleSuccessfulAuth}
          handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
        />
      </div>
    );
  }
}
