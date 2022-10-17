import React from "react";
import { NavLink } from "react-router-dom";

import Auth from "../../pages/auth";
export default function TopBar() {
  return (
    <div className="nav-wrapper">
      <div className="topleft">
        <NavLink exact to="/" activeClassName="nav-link-active">
          TCR
        </NavLink>
      </div>

      <div className="topcenter">
        <div className="toplistitem">
          <NavLink to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>
        <div className="toplistitem">
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="toplistitem">
          <NavLink to="/aboutme" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>
        <div className="toplistitem">
          <NavLink to="/addblog" activeClassName="nav-link-active">
            Add Blog
          </NavLink>
        </div>
      </div>
      <button className="topright" onClick={Auth}>
        Sign in with Google
      </button>
    </div>
  );
}
