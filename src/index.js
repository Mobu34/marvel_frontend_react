import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import "./index.css";
import App from "./App";
import favoriteReducer from "./reducers/favoriteReducer";
import fightReducer from "./reducers/fightReducer";

const reducers = combineReducers({
  favorites: favoriteReducer,
  fight: fightReducer,
});
const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
