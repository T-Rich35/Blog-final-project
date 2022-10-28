import React from "react";
import Blog from "../blog/blog";

export default function Blogs({ blogs }) {
  return (
    <div className="blogs">
      {blogs.map((b) => (
        <Blog key={b.id} blog={b} />
      ))}
    </div>
  );
}
