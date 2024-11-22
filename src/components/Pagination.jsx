// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center mt-4 space-x-4 italic font-poppins">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 italic bg-gray-200 rounded font-poppins"
      >
        Prev
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 italic bg-gray-200 rounded font-poppins"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
