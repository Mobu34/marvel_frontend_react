import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "react-loader-spinner";

// import Title from "../components/commun/Title";
import ItemList from "../components/commun/ItemList";
import Pagination from "../components/commun/Pagination";

import paginationFunc from "../functions/paginationFunc";
import pageClickFunc from "../functions/pageClickFunc";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState({});
  const [pages, setPages] = useState([]);

  const { p } = useParams();

  useEffect(() => {
    const limit = 100;
    const skip = (pageClickFunc(p) - 1) * 100;

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://marvel-backend-1.herokuapp.com/comics",
          {
            limit,
            skip,
          }
        );

        console.log(response.data);
        if (response.data.code === 200) {
          setComics(response.data.data.results);

          paginationFunc(response.data.data.total, setPages, p, skip);

          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [p]);

  return (
    <main className="Comics">
      <div className="wrapper">
        <div className="Comics-wrapper">
          {isLoading ? (
            <Loader type="Puff" color="#f11d22" style={{ marginTop: 50 }} />
          ) : (
            <>
              {/* <Title title="DISCOVER OUR COMICS" /> */}
              <ItemList data={comics} />
              <Pagination
                pages={pages}
                to="/comics/page_"
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

export default Comics;
