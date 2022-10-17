import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About My car</span>
        <img src="https://wallpapercave.com/wp/wp3879671.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          odit, qui, aut facere veritatis, nostrum totam ea animi nesciunt.
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">M5 </span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Challenger</li>
          <li className="sidebarlistitem">Bmw</li>
          <li className="sidebarlistitem">Raptor</li>
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow me</span>
        <div className="sidebarsocial"></div>
        <i className="sidebaricon">
          <FontAwesomeIcon icon="twitter" />
        </i>
      </div>
    </div>
  );
}
