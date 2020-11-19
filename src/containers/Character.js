import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ItemDetails from "../components/commun/ItemDetails";

const Character = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/character?id=${id}`
        );

        if (response.data.code === 200) {
          setCharacter(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="Character">
      <div className="wrapper">
        <div className="Character-wrapper">
          {isLoading ? (
            "Chargement en cours..."
          ) : (
            <ItemDetails item={character[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
