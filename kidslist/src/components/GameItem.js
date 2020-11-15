import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const GameItem = ({ game }) => {
  return (
    <div className="Item-Wrapper">
      <Link to={`/${game.slug}`} style={{ textDecoration: "none" }}>
        <h3>{game.name}</h3>
        <img src={game.image} />
        <h4>Type: {game.type}</h4>
      </Link>
    </div>
  );
};

export default GameItem;
