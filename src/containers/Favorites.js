import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <main className="Favorites">
      {favorites.map((favorite, index) => {
        console.log(favorite);
      })}
    </main>
  );
};

export default Favorites;
