import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-left">
        <img className="logo" src={Logo} alt="Food " />
        <h2> FOOD POINT</h2>
      </div>
      <div className="nav-right">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
