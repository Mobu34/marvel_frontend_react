import React, { useState } from "react";
import { connect } from "react-redux";
import setupFight from "../../reducers/fightReducer";

const Item = ({ item, dispatch }) => {
  const [inFight, setInFight] = useState(false);

  const handleClick = () => {
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

  return (
    <div className="Item" onClick={item.name && handleClick}>
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
