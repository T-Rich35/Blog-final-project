import React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";

export default function blog({ blog }) {
  return (
    <div className="blog">
      {blog.image && <img className="blogimg" src={blog.image} alt="" />}

      <div className="bloginfo">
        <div className="blogcats"></div>
        <Link to={`/blog/${blog._id}`} className="link">
          <span className="blogtitle"> {blog.title}</span>
        </Link>
        <hr />
        <span className="blogdate">
          {moment(blog.createdAt).format("MMM DD, YYYY")}
        </span>
      </div>
      <p className="blogdesc">{blog.content}</p>
      {/* <Link href={`/blog/${blog.content}`}> */}
      <span className="readbtn">Read more</span>
      {/* </Link> */}
    </div>
  );
}
