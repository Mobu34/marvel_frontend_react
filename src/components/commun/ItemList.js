import React from "react";

import Item from "./Item";

const ItemList = ({ data, manageFavorites }) => {
  return (
    <div className="ItemList">
      {data.map((item) => {
        return (
          <Item key={item.id} item={item} manageFavorites={manageFavorites} />
        );
      })}
    </div>
  );
};

export default ItemList;
