import React from "react";

const LinkedItem = ({ item }) => {
  return (
    <div className="LinkedItem">
      <img
        className="LinkedItem-image"
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt=""
      />
      <div className="LinkedItem-title">{item.title || item.name}</div>
    </div>
  );
};

export default LinkedItem;
