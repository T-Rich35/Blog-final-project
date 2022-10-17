import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          src=" 	https://www.chicagoautoshow.com/assets/1/23/VehicleRegularDimensionId/2020-Dodge-Challenger-1.jpg"
          alt=""
          className="singlepostimg"
        />
        <h1 className="singleposttitle">
          Scat Pack
          <div className="singlepostedit">
            <FontAwesomeIcon className="singleposticon" icon="pen" />
            <FontAwesomeIcon className="singledeleteicon" icon="trash" />
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>Tarrance</b>
          </span>
          <span className="singlepostdate">1 hour ago </span>
        </div>
        <p className="postdesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eaque culpa optio! Veniam Voluptatum eaque culpa optio! Veniam eaque
          culpa optio! Veniam Voluptatum eaque culpa optio! Veniam Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum eaque culpa
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          eaque culpa optio! Veniam Voluptatum eaque culpa optio! Veniam eaque
          culpa optio! Veniam Voluptatum eaque culpa optio! Veniam Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatum eaque culpa
        </p>
      </div>
    </div>
  );
}
