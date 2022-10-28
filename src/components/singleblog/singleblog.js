import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import moment from "moment/moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../sidebar/sidebar";

export default class SingleBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
    };
  }

  getBlogItem() {
    axios
      .get(`http://127.0.0.1:5000/blog/${this.state.currentId}`)
      .then((response) => {
        this.setState({
          blogItem: response.data,
        });
      })
      .catch((error) => {
        console.log("getBlogItem", error);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const { title, content, image } = this.state.blogItem;

    return (
      <div className="singleblog">
        <div className="singleblogwrapper">
          <img src={image} className="singleblogimg" />
          <h1 className="singleblogtitle">
            <span>{title}</span>
            <div className="singleblogedit">
              {<FontAwesomeIcon className="singleblogicon" icon="fa-pen" />}

              {<FontAwesomeIcon className="singledeleteicon" icon="trash" />}
            </div>
          </h1>
          <div className="singlebloginfo">
            <span className="singleblogauthor">
              Author: <b>Tarrance</b>
            </span>
            <span className="singleblogdate">
              {moment().format("MMM DD, YYYY")}
            </span>
          </div>
          <p className="postdesc">{content}</p>
        </div>

        {/* <div>{<Sidebar />}</div> */}
      </div>
    );
  }
}
