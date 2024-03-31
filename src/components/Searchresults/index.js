import Link from "next/link";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const SearchResults = ({ results, onClose }) => {
  const handleClick = (e) => {
    onClose();
  };
  const [pageNumber, setPageNumber] = useState(0);

  const resultsPerPage = 8;
  const pagesVisited = pageNumber * resultsPerPage;
  const displayResults =
    results.length > 0 ? (
      results
        .slice(pagesVisited, pagesVisited + resultsPerPage)
        .map((article, index) => (
          <Link
            href={`/${article.tags}/${article.id}`}
            onClick={handleClick}
            key={index}
          >
            <div className="p-4 border-color-white rounded-lg transition duration-200 transform hover:scale-105 hover:bg-gray-100 cursor-pointer">
              <h1 className="text-lg font-semibold underline decoration-blue-500 underline-offset-4 text-center">
                {article.title}
              </h1>
            </div>
          </Link>
        ))
    ) : (
      <h2 className="text-2xl m-3 text-center font-semibold text-accent dark:text-accentDark ">
        Not Found
      </h2>
    );
  const pageCount = Math.ceil(results.length / resultsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent dark:text-accentDark ">
        Search Results:
      </h2>
      <div>{displayResults}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={
          "pagination flex justify-center items-center space-x-2"
        }
        previousClassName={
          "pagination__link block px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
        }
        nextClassName={
          "pagination__link block px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
        }
        // disabledClassName={"pagination__link--disabled  opacity-70"}
        activeClassName={"pagination__link--active underline font-bold"}
      />
    </div>
  );
};

export default SearchResults;
