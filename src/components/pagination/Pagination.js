import React, { useState } from "react";
import { PaginationList, PaginationButtons } from "./Pagination.style";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [visiblePages, setVisiblePages] = useState([]);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <PaginationList className="pagination">
        {pageNumbers.map((number) => (
          <PaginationButtons key={number} onClick={() => paginate(number)}>
            {number}
          </PaginationButtons>
        ))}
      </PaginationList>
    </>
  );
};

export default Pagination;
