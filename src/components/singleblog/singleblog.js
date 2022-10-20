import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";

export default function Single() {
  // const location = useLocation();
  // console.log(location);
  return (
    <div className="singleblog">
      <div className="singleblogwrapper">
        <img
          src=" 	https://www.chicagoautoshow.com/assets/1/23/VehicleRegularDimensionId/2020-Dodge-Challenger-1.jpg"
          alt=""
          className="singleblogimg"
        />
        <h1 className="singleblogtitle">
          Scat Pack
          <div className="singleblogedit">
            <FontAwesomeIcon className="singleblogicon" icon="fa-pen" />

            <FontAwesomeIcon className="singledeleteicon" icon="trash" />
          </div>
        </h1>
        <div className="singlebloginfo">
          <span className="singleblogauthor">
            Author: <b>Tarrance</b>
          </span>
          <span className="singleblogdate">1 hour ago </span>
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
