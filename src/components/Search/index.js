import { useState } from "react";
import Modal from "../Modal";
import SearchResults from "../Searchresults";
import Fuse from "fuse.js";
import {
  allHomes,
  allGojuons,
  allJlptN3s,
  allJlptN4s,
  allJlptN5s,
} from "@/.contentlayer/generated";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [results, setResults] = useState([]);
  const allPosts = [
    ...allHomes,
    ...allGojuons,
    ...allJlptN3s,
    ...allJlptN4s,
    ...allJlptN5s,
  ];
  // 初始化 Fuse.js

  const fuse = new Fuse(allPosts, {
    keys: ["title", "_raw.flattenedPath"],
    weights: {
      title: 0.8,
      "_raw.flattenedPath": 0,
    },
    threshold: 0.3,
  });

  function search(query) {
    const results = fuse.search(query);
    return results.map(({ item }) => item);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) {
      return; // 如果查询字符串为空，则不执行搜索，也不打开模态框
    }
    setResults(search(query));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex ml-auto items-center mt-5 relative"
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search within the site..."
          className="w-full py-2 pl-4 pr-10 text-gray-700 border rounded-md focus:outline-none   bg-yellow-50  focus:border-accent dark:focus:border-accentDark"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:border-accent dark:focus:border-accentDark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SearchResults results={results} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Search;
