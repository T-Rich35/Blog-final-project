import React from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  const { id, title, content, image } = props.blog;

  return (
    <div className="blog">
      {image && <img className="blogimg" src={image} alt="" />}
      <div className="bloginfo">
        <div className="blogcats"></div>
        <Link to={`/blog/${id}`} className="link">
          <span className="blogtitle"> {title}</span>
        </Link>
        <hr />
        <span className="blogdate">{moment().format("MMM DD, YYYY")}</span>
      </div>
      <p className="blogdesc">{content}</p>
      <Link to={`/blog/${id}`} className="link">
        <span className="readbtn">Read more</span>
      </Link>
    </div>
  );
};

export default BlogItem;
