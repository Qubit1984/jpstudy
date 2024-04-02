"use client";

import { useState, useEffect } from "react";
import { BacktotopIcon } from "../Icons";
const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-10">
      {showButton && (
        <button
          onClick={handleClick}
          className="bg-transparent border border-blue-500  hover:bg-blue-500  px-2 py-2 rounded focus:outline-none focus:shadow-outline"
        >
          <BacktotopIcon className="h-20 w-10 fill-accent dark:fill-accentDark " />
          <h1 className=" text-accent dark:text-accentDark font-bold">Top</h1>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
