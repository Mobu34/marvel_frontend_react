import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pages, to, setIsLoading, p }) => {
  const [pageColor, setPageColor] = useState(false);

  const splittedPage = p.split("_");
  const page = Number(splittedPage[1]);

  return (
    <div className="Pagination">
      <Link
        to={page === 1 ? `${to}${page}` : `${to}${page - 1}`}
        className="link"
      >
        {"<"}
      </Link>
      {pages.map((item) => {
        return (
          <Link
            key={item}
            to={`${to}${item}`}
            className={
              pageColor ? "Pagination-link-active link" : "Pagination-link link"
            }
            onClick={() => setIsLoading(true)}
          >
            {item}
          </Link>
        );
      })}
      <Link
        to={
          page === pages[pages.length - 1] ? `${to}${page}` : `${to}${page + 1}`
        }
        className="link"
      >
        {">"}
      </Link>
    </div>
  );
};

export default Pagination;
