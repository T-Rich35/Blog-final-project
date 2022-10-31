import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Sidebar() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(
        "https://tcr-blog-backend.herokuapp.com/blogs"
      );
      setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About My car</span>
        <img src="https://wallpapercave.com/wp/wp3879671.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          odit, qui, aut facere veritatis, nostrum totam ea animi nesciunt Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit,
          qui, aut facere veritatis, nostrum totam ea animi nesciunt Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Assumenda odit, qui, aut
          facere veritatis, nostrum totam ea animi nesciunt.
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Blogs</span>
        <ul className="sidebarlist">
          {blogs.map((b) => (
            <Link to={`/blog/2`} className="link">
              <li className="sidebarlistitem" key={b.title}>
                {b.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow me</span>
        <div className="sidebarsocial"></div>

        <Link to={"/contact"} className="link">
          <i className="sidebaricon">
            <i className="fa-brands fa-twitter"></i>
          </i>
        </Link>
      </div>
    </div>
  );
}
