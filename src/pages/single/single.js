import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import SingleBlog from "../../components/singleblog/singleblog";

export default function Single() {
  return (
    <div className="single">
      <SingleBlog />
      <Sidebar />
    </div>
  );
}
