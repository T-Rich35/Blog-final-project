import React from "react";

export default function Signup() {
  return (
    <div className="signup">
      <span className="signupTitle">SIGNUP</span>
      <form className="signupform">
        <label>Username</label>
        <input
          className="signupinput"
          type="text"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          className="signupinput"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="signupinput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="signupbutton">signup</button>
      </form>
      <button className="registerloginbutton">Login</button>
    </div>
  );
}
