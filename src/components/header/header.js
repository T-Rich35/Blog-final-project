import React from "react";
import ImageSlider from "../imageSlider";
import { SliderData } from "../sliderData";

export default function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headertitlesm">Dodge Challenger & Bmw, Raptor</span>
        <span className="headertitlelg">Blogs</span>
      </div>
      <div>
        <ImageSlider slides={SliderData} className="headerimg" />
      </div>
    </div>
  );
}
