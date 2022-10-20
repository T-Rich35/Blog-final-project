import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Blogs from "../../components/blogs/blogs";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = axios.get("http://127.0.0.1:5000/blogs");
      setBlogs((await response).data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="home">
        <Blogs blogs={blogs} />
        <Sidebar />
      </div>
    </div>
  );
}
