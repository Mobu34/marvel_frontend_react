import axios from "axios";
import React, { useState, useEffect } from "react";

import LinkedItem from "./LinkedItem";

const ItemDetails = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemDetails, setItemDetails] = useState([]);

  let available, cat1, cat2, title, itemTitle;
  if (item.comics) {
    available = item.comics.available;
    cat1 = "character";
    cat2 = "comics";
    title = "No comics linked to this character";
    itemTitle = "Comic(s)";
  } else {
    available = item.characters.available;
    cat1 = "comic";
    cat2 = "characters";
    title = "No characters linked to this comic";
    itemTitle = "Character(s)";
  }

  useEffect(() => {
    if (available > 0) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/${cat1}/${cat2}?id=${item.id}`
          );

          if (response.data.code === 200) {
            setItemDetails(response.data.data.results);
            setIsLoading(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    } else {
      setIsLoading(false);
    }
  }, [available, cat1, cat2, item.id]);

  return (
    <div className="ItemDetails">
      <img
        className="ItemDetails-image"
        src={item.thumbnail.path + "." + item.thumbnail.extension}
      />
      <div className="ItemDetails-details-container">
        <h2 className="ItemDetails-title">{item.name || item.title}</h2>
        {isLoading ? (
          "Chargement en cours"
        ) : available === 0 ? (
          title
        ) : (
          <div className="ItemDetails-linkeditems-container">
            <h3 className="ItemDetails-linkeditems-title">Comic(s)</h3>
            <div className="ItemDetails-linkeditems-image">
              {itemDetails.map((item, index) => {
                return <LinkedItem key={index} item={item} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
