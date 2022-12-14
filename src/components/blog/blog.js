import React, { Component } from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogItem from "./blog-item";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios
      .get("https://tcr-blog-backend.herokuapp.com/blogs")
      .then((response) => {
        this.setState({
          blogItems: response.data,
        });
      })
      .catch((error) => {
        error;
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    const blogRecords = this.state.blogItems.map((blog) => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return (
          <div className="admin-wrapper">
            <BlogItem key={blog.id} blog={blog} />
          </div>
        );
      } else {
        return <BlogItem key={blog.id} blog={blog} />;
      }
    });
    return <div className="blogs">{blogRecords}</div>;
  }
}

export default Blog;
