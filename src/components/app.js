import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "../pages/home/home";
import TopBar from "./topbar/topbar";
import Auth from "../pages/auth";
import About from "../pages/about";
import AddBlog from "../pages/add-blog";
import Contact from "../pages/contact";
import NoMatch from "../pages/no-match";
import Single from "../pages/single/single";
import SingleBlog from "./singleblog/singleblog";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN",
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
    });
  }

  checkLoginStatus() {
    return axios
      .post("https://tcr-blog-backend.herokuapp.com/login", {
        email: "",
        password: "",
      })
      .then((response) => {
        const loggedIn = response.data.successful;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status successful => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
          });
        }
      })
      .catch((error) => {
        "Error", error;
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route path="/addblog" component={AddBlog} />];
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <TopBar
              loggedInStatus={this.state.loggedInStatus}
              handleLogout={this.handleLogout}
            />

            {/* <h2>{this.state.loggedInStatus}</h2> */}

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={(props) => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route path="/contact" component={Contact} />
              <Route path="/aboutme" component={About} />
              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedPages()
                : null}
              <Route path="/blog/:slug" component={SingleBlog} />
              <Route path="/blog/:Id" component={Single} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
