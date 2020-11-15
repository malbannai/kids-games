import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/most-rated/five-stars" style={{ textDecoration: "none" }}>
        5 Stars
      </Link>
      <Link to="/most-rated/four-stars" style={{ textDecoration: "none" }}>
        4 Stars
      </Link>
      <Link to="/most-rated/three-stars" style={{ textDecoration: "none" }}>
        3 Stars
      </Link>
      <Link to="/most-rated/two-stars" style={{ textDecoration: "none" }}>
        2 Stars
      </Link>
      <Link to="/most-rated/one-stars" style={{ textDecoration: "none" }}>
        1 Stars
      </Link>
    </div>
  );
};

export default NavBar;
