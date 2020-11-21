import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ item, dispatch, favorites }) => {
  console.log(favorites);
  const history = useHistory();

  const [inFight, setInFight] = useState(false);

  item.isFavorite = false;
  for (let i = 0; i < favorites.length; i++) {
    if (favorites[i].id === item.id) {
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
    // item.isFavorite = item.isFavorite ? false : true;
    const action = { type: "TOGGLE_FAVORITE", value: item };
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
    favorites: state.favorites.favorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
