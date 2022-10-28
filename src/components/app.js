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

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <TopBar loggedInStatus={this.state.loggedInStatus} />

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
              <Route path="/addblog" component={AddBlog} />
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
