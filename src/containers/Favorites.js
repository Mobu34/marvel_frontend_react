import React from "react";
import { connect } from "react-redux";

import Title from "../components/commun/Title";
import Item from "../components/commun/Item";

const Favorites = ({ favorites }) => {
  console.log("Favorites");
  return (
    <main className="Favorites">
      <div className="wrapper">
        <div className="Favorites-wrapper">
          {favorites.length === 0 ? (
            "Please add characters in favorites"
          ) : (
            <>
              <Title title="MY FAVS" />
              <div className="Favorites-item-container">
                <h2 className="Favorites-item-title">MY CHARACTERS</h2>
                <div className="Favorites-item-subcontainer">
                  {favorites.map((favorite, index) => {
                    return <Item key={index} item={favorite} />;
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
