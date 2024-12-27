import React, { useState } from "react";
import { Link } from "react-router-dom";
import { paginationData } from "../../utils/constant";

const Pagination = () => {
  const { totalPages } = paginationData; // Retrieve totalPages from constants.js
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="row mt-8">
      <div className="col">
        <nav>
          <ul className="pagination">
            {/* Previous Button */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <Link
                className="page-link mx-1 rounded-3"
                to="#"
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous"
              >
                <i className="fa fa-chevron-left" />
              </Link>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <Link
                  className="page-link mx-1 rounded-3"
                  to="#"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Link>
              </li>
            ))}

            {/* Next Button */}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <Link
                className="page-link mx-1 rounded-3"
                to="#"
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next"
              >
                <i className="fa fa-chevron-right" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
