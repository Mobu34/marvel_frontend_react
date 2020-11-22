import React from "react";
import { connect } from "react-redux";

// import Title from "../components/commun/Title";
import Item from "../components/commun/Item";

const Favorites = ({ favoriteCharacters, favoriteComics }) => {
  console.log("Favorites");
  return (
    <main className="Favorites">
      <div className="wrapper">
        <div className="Favorites-wrapper">
          <div>
            {favoriteCharacters.length === 0 ? (
              "Please add characters in favorites"
            ) : (
              <>
                {/* <Title title="MY FAVS" /> */}
                <div className="Favorites-item-container">
                  <h2 className="Favorites-item-title">MY CHARACTERS</h2>
                  <div className="Favorites-item-subcontainer">
                    {favoriteCharacters.map((favorite, index) => {
                      return <Item key={index} item={favorite} />;
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
          <div>
            {favoriteComics.length === 0 ? (
              "Please add some comics in favorites"
            ) : (
              <div className="Favorites-item-container">
                <h2 className="Favorites-item-title">MY COMICS</h2>
                <div className="Favorites-item-subcontainer">
                  {favoriteComics.map((favorite, index) => {
                    console.log(favorite);
                    return <Item key={index} item={favorite} />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters.favorites,
    favoriteComics: state.favoriteComics.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
