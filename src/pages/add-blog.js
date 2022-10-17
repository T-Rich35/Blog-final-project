import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddBlog() {
  return (
    <div className="add">
      <img
        className="writeimg"
        src="https://www.motorbiscuit.com/wp-content/uploads/2020/06/2019-Dodge-Challenger-SRT-Hellcat.jpg"
        alt=""
      />
      <form className="addform">
        <div className="addformgroup">
          <label htmlFor="fileinput">
            <FontAwesomeIcon className="writeicon" icon="fa-solid fa-plus" />
          </label>
          <input type="file" id="fileinput" style={{ display: "none" }} />
          <input type="text" placeholder="title" className="writeinput" />
        </div>
        <div className="addformgroup">
          <textarea
            placeholder="new blog"
            type="text"
            className="writeinput writetext"
          ></textarea>
        </div>
        <button className="writesubmit">publish</button>
      </form>
    </div>
  );
}
