import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

import Title from "../components/commun/Title";
import ItemList from "../components/commun/ItemList";
import Pagination from "../components/commun/Pagination";

import paginationFunc from "../functions/paginationFunc";
import pageClickFunc from "../functions/pageClickFunc";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState({});
  const [pages, setPages] = useState([]);

  const { p } = useParams();

  useEffect(() => {
    const limit = 100;
    const skip = (pageClickFunc(p) - 1) * 100 || 0;

    const fetchData = async () => {
      console.log("fetcg");
      try {
        const response = await axios.post("http://localhost:3001/characters", {
          limit,
          skip,
        });

        if (response.data.code === 200) {
          setCharacters(response.data.data.results);

          paginationFunc(response.data.data.total, setPages, p, skip);

          console.log(response.data.code);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [p]);

  return (
    <main className="Characters">
      <div className="wrapper">
        <div className="Characters-wrapper">
          {isLoading ? (
            <Loader type="Puff" color="#f11d22" style={{ marginTop: 50 }} />
          ) : (
            <>
              <Title title="DISCOVER OUR CHARACTERS" />
              <ItemList data={characters} />
              <Pagination
                pages={pages}
                to="/characters/page_"
                setIsLoading={setIsLoading}
                p={p}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Characters;
