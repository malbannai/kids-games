import React from "react";
import GameItem from "./GameItem";
import "../App.css";
import RatingNav from "./RatingNav";
import { Route, Switch } from "react-router";

const MostRated = ({ list }) => {
  const games = list.map((game) => <GameItem game={game} />);
  const pickedRate = (num) => {
    return list.filter((game) => {
      if (game.rating === num) return <GameItem game={game} />;
    });
  };

  return (
    <>
      <RatingNav />

      <Switch>
        <Route path="/most-rated">
          <div className="List-Wrapper">{games}</div>
        </Route>
        <Route path="/most-rated/five-stars">
          <div className="List-Wrapper">{pickedRate(5)}</div>
        </Route>
        <Route path="/most-rated/four-stars">
          <div className="List-Wrapper">{pickedRate(4)}</div>
        </Route>
        <Route path="/most-rated/four-stars">
          <div className="List-Wrapper">{pickedRate(3)}</div>
        </Route>
        <Route path="/most-rated/four-stars">
          <div className="List-Wrapper">{pickedRate(2)}</div>
        </Route>
        <Route path="/most-rated/four-stars">
          <div className="List-Wrapper">{pickedRate(1)}</div>
        </Route>
      </Switch>
    </>
  );
};

export default MostRated;
