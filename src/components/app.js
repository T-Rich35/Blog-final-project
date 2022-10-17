import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "../pages/home/home";
import Single from "../pages/single/single";
import TopBar from "./topbar/topbar";
import Auth from "../pages/auth";
import About from "../pages/about";
import AddBlog from "../pages/add-blog";
import Contact from "../pages/contact";
import NoMatch from "../pages/no-match";

export default class App extends Component {
  constructor() {
    super();

    this.getBlogitems = this.getBlogitems.bind(this);
  }
  getBlogitems() {
    axios
      .get("http://127.0.0.1:5000")
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  render() {
    this.getBlogitems();
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
              <Route path="/auth" component={Auth} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
