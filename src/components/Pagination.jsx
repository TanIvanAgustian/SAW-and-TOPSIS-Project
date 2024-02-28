import { useState } from "react";
export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-blue-700 uppercase align-middle transition-all rounded-full select-none hover:bg-blue-700/10 active:bg-blue-700/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
        type="button"
        disabled = {currentPage == 1 ? "disabled" : null}
        onClick={() => paginate(currentPage-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
        Previous
      </button>
        <ul className="pagination flex items-center gap-2">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-blue-700 transition-all hover:bg-blue-700/10 active:bg-blue-700/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
                    currentPage === number ? 'bg-blue-700 text-white hover:bg-blue-700' : '' // Apply active style if currentPage matches number
                  }`}
                type="button"
                onClick={() => paginate(number)}
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  {number}
                </span>
              </button>
            </li>
          ))}
        </ul>
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-blue-700 uppercase align-middle transition-all rounded-full select-none hover:bg-blue-700/10 active:bg-blue-700/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        disabled = {currentPage == pageNumbers.length ? "disabled" : null}
        onClick={() => paginate(currentPage+1)}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
}
