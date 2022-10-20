import React from "react";
import { Link } from "react-router-dom";
import Blog from "../blog/blog";

export default function Blogs({ blogs }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blogs" key={Blog.id}>
          <Link to={`/blogs/${Blog.id}`}>
            <Blog blog={blog} />
          </Link>
        </div>
      ))}
    </div>
  );
}
