import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import "./index.css";
import App from "./App";
import favoriteCharactersReducer from "./reducers/favoriteCharactersReducer";
import favoriteComicsReducer from "./reducers/favoriteComicsReducers";
import fightReducer from "./reducers/fightReducer";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  favoriteCharacters: favoriteCharactersReducer,
  favoriteComics: favoriteComicsReducer,
  fight: fightReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
