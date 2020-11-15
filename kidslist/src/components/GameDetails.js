import { useParams, Redirect } from "react-router-dom";
import React from "react";
import "../App.css";
import RecomendedList from "./RecomendedList";

//Share
import { CopyToClipboard } from "react-copy-to-clipboard";

const GameDetails = ({ list }) => {
  //Create the Slug
  const selected = useParams().gameInfo;
  const element = list.find((item) => selected === item.slug);

  //Redirecting
  if (!element) return <Redirect to="/" />;

  //The copied value
  const gameName = `http://localhost:3000/${element.slug}`;
  return (
    <>
      <div className="List-Wrapper">
        <div className="Description">
          <h1>{element.name}</h1>
          <img src={element.image} />
          <p>Game description: {element.description}</p>
          <p>Suitable for: {element.age}</p>
          <p>Game type: {element.type}</p>
          <p>Game rated as: {element.rating}</p>
          <CopyToClipboard text={gameName}>
            <button>Copy The Game URL</button>
          </CopyToClipboard>
          <RecomendedList list={list} element={element} />
        </div>
      </div>
    </>
  );
};

export default GameDetails;
