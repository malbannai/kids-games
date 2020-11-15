import "./App.css";
import GamesList from "./components/GamesList";
import MostRated from "./components/MostRated";
import GameDetails from "./components/GameDetails";
import MostPopular from "./components/MostPopular";
import Head from "./components/Head";
import gamesData from "./gamesData";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <GamesList list={gamesData} />
          </Route>
          <Route path="/:gameInfo">
            <GameDetails list={gamesData} />
          </Route>
          <Route path="/most-popular">
            <MostPopular list={gamesData} />
          </Route>
          <Route path="/most-rated">
            <MostRated list={gamesData} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
