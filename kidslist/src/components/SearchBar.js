import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <input
      placeholder="Search for a game name..."
      className="searchBar"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
