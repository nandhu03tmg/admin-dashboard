// src/PaginationDemo.js

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Example.css'; // Import the CSS file for styling

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Adjust the number of items per page according to your needs
  const data = Array.from({ length: 30 }, (_,i) => i + 1);

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (  
    <div className="pagination-demo">
      <h2>Pagination Demo</h2>

      <ul>
        {currentPageData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ReactPaginate
        pageCount={Math.ceil(data.length / itemsPerPage)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginationDemo;
