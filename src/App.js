import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from "./containers/Characters";
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
            <Characters />
          </Route>
          <Route path="/characters/:p">
            <Characters />
          </Route>
          <Route path="/comics/:p">
            <Comics />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
