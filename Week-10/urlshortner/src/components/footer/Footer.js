import React from "react";
import "./Footer.css";

function Footer() {
  return <div className="footerContainer">
    <div className="footerlogo">Shortly</div>
    <div className="footerContent">
        <ul>
            <li>Features</li>
            <li>Link Shortning</li>
            <li>Brand List</li>
            <li>Analytics</li>
        </ul>
        <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
        </ul>
        <ul>
            <li>Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Career</li>
        </ul>
    </div>
    <div className="registration">
        <li>Login</li>
        <li>Sign Up</li>
    </div>
  </div>;
}

export default Footer;
