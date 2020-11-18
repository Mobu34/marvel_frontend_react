import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Header from "./components/commun/Header";
import Footer from "./components/commun/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters/:p">
            <Home />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
