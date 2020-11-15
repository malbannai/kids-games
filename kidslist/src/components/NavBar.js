import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/most-popular" style={{ textDecoration: "none" }}>
        Most Popular
      </Link>
      <Link to="/most-rated" style={{ textDecoration: "none" }}>
        Most Reated
      </Link>
    </div>
  );
};

export default NavBar;
