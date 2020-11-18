import React from "react";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div
      className="Item"
      //   style={{ backgroundImage: `url(${item.thumbnail.path})` }}
    >
      <div className="Item-image"></div>
      <div className="Item-name">{item.name}</div>
    </div>
  );
};

export default Item;
