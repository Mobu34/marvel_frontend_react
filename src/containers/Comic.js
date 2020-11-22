import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import ItemDetails from "../components/commun/ItemDetails";

const Comic = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comic?id=${id}`
        );

        console.log(response.data);
        if (response.data.code === 200) {
          setComic(response.data.data.results);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="Comic">
      <div className="wrapper">
        <div className="Comic-wrapper">
          {isLoading ? (
            <Loader type="Puff" color="#f11d22" style={{ marginTop: 50 }} />
          ) : (
            <ItemDetails item={comic[0]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Comic;
