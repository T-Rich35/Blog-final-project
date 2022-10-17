import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <div className="content-page-wrapper">
      <div className="left-column">
        <img
          className="aboutimg"
          src="https://th.bing.com/th/id/R.0b9a28010cfe3cfe1dd674e1ca0bed58?rik=TUH9JsCiz3cCSg&pid=ImgRaw&r=0"
          alt=""
        ></img>
      </div>

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="text">555-555-5555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="text">Tee@gmail.com</div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <i class="fa-solid fa-map"></i>
            </div>
            <div className="text">BMW, AL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
