import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: "",
    });
  }

  handleSubmit(event) {
    axios
      .post("https://tcr-blog-backend.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        if (response.data.successful == true) {
          this.props.handleSuccessfulAuth();
        } else {
          this.setState({
            errorText: "Wrong email or password",
          });
          this.props.handleUnsuccessfulAuth();
        }
      })
      .catch((error) => {
        this.setState({
          errorText: "An error occurred",
        });
        this.props.handleUnsuccessfulAuth();
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>{this.state.errorText}</div>

        <form className="loginform" onSubmit={this.handleSubmit}>
          <input
            className="logininput"
            type="text"
            name="email"
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            className="logininput"
            type="password"
            name="password"
            placeholder="your password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div>
            <button className="loginbutton">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
