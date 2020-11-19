import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import Tournament from "./containers/Tournament";
import Character from "./containers/Character";
import Comic from "./containers/Comic";
import Header from "./components/commun/Header";
import Footer from "./components/commun/Footer";

import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const manageFavorites = (item) => {
    const newFavorites = [...favorites];

    if (favorites.indexOf(item) !== -1) {
      newFavorites.splice(favorites.indexOf(item), 1);
    } else {
      newFavorites.push(item);
    }
    setFavorites(newFavorites);
  };

  console.log(favorites);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Characters manageFavorites={manageFavorites} />
          </Route>
          <Route path="/characters/:p">
            <Characters manageFavorites={manageFavorites} />
          </Route>
          <Route path="/comics/:p">
            <Comics />
          </Route>
          <Route path="/favorites">
            <Favorites favorites={favorites} />
          </Route>
          <Route path="/tournament">
            <Tournament />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
          <Route path="/comic/:id">
            <Comic />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
