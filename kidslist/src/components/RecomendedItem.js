import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const RecomendedItem = ({ game }) => {
  return (
    <div className="Rec-Item-Wrapper">
      <Link to={`/${game.slug}`} style={{ textDecoration: "none" }}>
        <h3>{game.name}</h3>
        <img src={game.image} />
      </Link>
    </div>
  );
};

export default RecomendedItem;
