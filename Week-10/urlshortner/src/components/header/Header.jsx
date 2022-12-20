import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="logo">Shortly</div>
      <div className="tabs">
        <div className="tabsdivs">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </div>
        <div className="tabsdivs">
          <Link to="/links" style={{ textDecoration: "none", color: "black" }}>
            Links
          </Link>
        </div>
      </div>
      <div className="registration">
        <button className="btn">LogIn</button>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
