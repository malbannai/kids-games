import React from "react";
import GameItem from "./GameItem";
import "../App.css";

const MostPopular = ({ list }) => {
  const games = [];

  list.filter((game) => {
    if (game.popularity) games.push(<GameItem game={game} />);
  });
  return <div className="List-Wrapper">{games}</div>;
};

export default MostPopular;
