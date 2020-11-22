import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import Tournament from "./containers/Tournament";
import Character from "./containers/Character";
import Comic from "./containers/Comic";
import Header from "./components/commun/Header";
import Footer from "./components/commun/Footer";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/characters/:p">
            <Characters />
          </Route>
          <Route path="/comics/:p">
            <Comics />
          </Route>
          <Route path="/favorites">
            <Favorites />
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
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Redirect to="/characters/page_1" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
