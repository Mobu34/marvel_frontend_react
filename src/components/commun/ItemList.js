import React from "react";

import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div className="ItemList">
      {data.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
