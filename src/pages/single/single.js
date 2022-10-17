import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlepost/singlepost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
