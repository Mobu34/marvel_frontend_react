import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ item, dispatch, favoriteCharacters, favoriteComics }) => {
  const history = useHistory();
  console.log(favoriteComics);

  const [inFight, setInFight] = useState(false);

  item.isFavorite = false;
  for (let i = 0; i < favoriteCharacters.length; i++) {
    if (favoriteCharacters[i].id === item.id) {
      item.isFavorite = true;
    }
  }
  for (let i = 0; i < favoriteComics.length; i++) {
    if (favoriteComics[i].id === item.id) {
      item.isFavorite = true;
    }
  }

  const handleLinkClick = () => {
    if (item.name) {
      history.push(`/character/${item.id}`);
    } else {
      history.push(`/comic/${item.id}`);
    }
  };

  const handleParticipateClick = (e) => {
    console.log("handleParticipateClick");
    e.stopPropagation();
    if (inFight === false) {
      const action = { type: "ADD_PARTICIPANT", value: item };
      dispatch(action);
      setInFight(true);
    } else {
      const action = { type: "DELETE_PARTICIPANT", value: item };
      dispatch(action);
      setInFight(false);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    let action;
    if (item.name) {
      action = { type: "TOGGLE_FAVORITE_CHARACTERS", value: item };
    } else {
      action = { type: "TOGGLE_FAVORITE_COMICS", value: item };
    }

    dispatch(action);
  };

  return (
    <div className="Item" onClick={handleLinkClick}>
      {item.name && (
        <div
          className="Item-participate"
          onClick={handleParticipateClick}
        ></div>
      )}
      <div
        className={item.isFavorite ? "Item-favorite" : "Item-not-favorite"}
        onClick={handleFavoriteClick}
      >
        <FontAwesomeIcon
          icon={["fas", "star"]}
          className={
            item.isFavorite ? "Item-favorite-icon" : "Item-not-favorite-icon"
          }
        />
      </div>
      <img
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt={item.name || item.title}
        className="Item-image"
      />
      <div className="Item-name">{item.name || item.title}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favoriteCharacters: state.favoriteCharacters.favorites,
    favoriteComics: state.favoriteComics.favorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
