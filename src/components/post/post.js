import React from "react";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postimg"
        src="https://weudealerimagesprd.blob.core.windows.net/me1441/news/Ford-F150-Raptor.jpg "
        alt=""
      />

      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Truck</span>
          <span className="postcat">life</span>
        </div>
        <span className="posttitle">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisi
        </span>
        <hr />
        <span className="postdate">1 hour age </span>
      </div>
      <p className="postdesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        eaque culpa optio! Veniam Voluptatum eaque culpa optio! Veniam eaque
        culpa optio! Veniam Voluptatum eaque culpa optio! Veniam Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatum eaque culpa
      </p>
    </div>
  );
}
