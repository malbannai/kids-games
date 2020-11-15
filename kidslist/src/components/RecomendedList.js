import React from "react";
import RecomendedItem from "./RecomendedItem";
import "../App.css";

const RecomendedList = ({ list, element }) => {
  //Recomended list
  const recomended = [];

  list.map((game) => {
    if (game.type === element.type)
      recomended.push(<RecomendedItem game={game} />);
  });
  //   const games = list.map((game) => <RecomendedItem game={game} />);
  return (
    <>
      <h1>Recomended Games</h1>
      <div className="Rec-Wrapper">{recomended}</div>
    </>
  );
};

export default RecomendedList;
