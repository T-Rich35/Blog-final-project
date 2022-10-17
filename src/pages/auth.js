import React from "react";

export default function Auth() {
  return (
    <div className="login">
      <span className="logintitle">LOGIN</span>
      <form className="loginform">
        <label>Email</label>
        <input
          className="logininput"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="logininput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="loginbutton">Login</button>
      </form>
      <button className="loginregisterbutton">signup</button>
    </div>
  );
}
