import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Item = ({ item, dispatch, manageFavorites }) => {
  const history = useHistory();

  const [inFight, setInFight] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleLinkClick = () => {
    if (item.name) {
      history.push(`/character/${item.id}`);
    } else {
      history.push(`/comic/${item.id}`);
    }
  };

  const handleParticipateClick = (e) => {
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
    manageFavorites(item);
    setFavorite(!favorite);
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
        className={favorite ? "Item-favorite" : "Item-not-favorite"}
        onClick={handleFavoriteClick}
      ></div>
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

export default connect(mapDispatchToProps)(Item);
