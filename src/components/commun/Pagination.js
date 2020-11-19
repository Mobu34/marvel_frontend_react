import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pages, to, setIsLoading }) => {
  // const {p} = useParams()
  return (
    <div className="Pagination">
      <span>{"<"}</span>
      {pages.map((page) => {
        // if (page > )
        return (
          <Link
            key={page}
            to={`${to}${page}`}
            className="Pagination-link link"
            onClick={() => setIsLoading(true)}
          >
            {page}
          </Link>
        );
      })}
      <span>{">"}</span>
    </div>
  );
};

export default Pagination;
