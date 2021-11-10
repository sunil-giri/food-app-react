import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="nav-left">
        <img
          className="logo"
          src="https://images.unsplash.com/photo-1616690710400-a16d146927c5?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0MjY4NjZ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          alt="Food "
        />
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
