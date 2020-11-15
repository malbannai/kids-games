import React, { useState } from "react";
import GameItem from "./GameItem";
import "../App.css";

// Search
import SearchBar from "./SearchBar";

const GamesList = ({ list }) => {
  // Searching
  const [query, setQuery] = useState("");
  const gameList = list
    .filter((game) => game.name.toLowerCase().includes(query.toLowerCase()))
    .map((game) => <GameItem game={game} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="List-Wrapper">{gameList}</div>
    </>
  );
};

export default GamesList;
