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

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <TopBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/aboutme" component={About} />
              <Route path="/addblog" component={AddBlog} />
              <Route path="/blog/:blogId" component={Single} />
              <Route path="/auth" component={Auth} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
