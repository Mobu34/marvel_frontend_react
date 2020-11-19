import React from "react";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div
      className="Item"
      //   style={{ backgroundImage: `url(${item.thumbnail.path})` }}
    >
      {/* <div className="Item-image"></div> */}
      <img
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt={item.name || item.title}
        className="Item-image"
      />
      <div className="Item-name">{item.name || item.title}</div>
    </div>
  );
};

export default Item;
