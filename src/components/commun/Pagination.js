import React from "react";
import { Link, useParams } from "react-router-dom";

const Pagination = ({ pages, to, setIsLoading }) => {
  // const {p} = useParams()
  return (
    <div className="Pagination">
      {pages.map((page) => {
        return (
          <Link
            key={page}
            to={`${to}${page}`}
            className="Pagination-link"
            onClick={() => setIsLoading(true)}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
