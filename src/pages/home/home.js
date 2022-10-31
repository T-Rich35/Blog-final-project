import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/header/header";
import Blog from "../../components/blog/blog";
import Sidebar from "../../components/sidebar/sidebar";
import ImageSlider from "../../components/imageSlider";
import { SliderData } from "../../components/sliderData";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = axios.get(
        "https://tcr-blog-backend.herokuapp.com/blogs"
      );
      setBlogs((await response).data);
      setIsLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        {isLoading && <div>Loading...</div>}
        <Blog blogs={blogs} />

        <Sidebar />
      </div>
    </div>
  );
}
