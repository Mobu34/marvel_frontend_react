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
              <div className="Favorite-item-container">
                <h2>MY COMICS</h2>
                {favorites.map((favorite, index) => {
                  return <Item key={index} item={favorite} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
