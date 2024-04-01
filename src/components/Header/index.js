"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import Search from "../Search";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handelClick = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const toggle = () => {
    setClick(!click);
    setIsOpen(false);
  };

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    e.preventDefault();
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    setResults(data);
    router.push("/search");
  };

  return (
    <header className="w-full p-2  px-2 sm:px-10  grid grid-cols-12 grid-rows-1 sm:grid-rows-2 lg:grid-rows-1">
      <div className="md:col-span-3 md:row-start-1 sm:row-span-2 sm:row-start-2 hidden sm:flex">
        <Logo mode={mode} />
      </div>
      <button
        className="inline-block sm:hidden z-50 col-start-12"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-5/6 mr-0.1 py-2 px-2 sm:px-8 border border-solid border-dark rounded-3xl font-medium capitalize  items-center flex flex-wrap  sm:hidden
        fixed top-6
        /* right-1/2 translate-x-1/2 */
         bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="w-1/4 text-center">
          Home
        </Link>
        {/*  <Link href="/" className="mr-2 px-3">
          Gojūon
        </Link> */}
        <div
          className="relative inline-block  w-1/4"
          onMouseEnter={handleMouseEnter}
          onClick={handelClick}
        >
          <button className="inline-flex items-center  py-2 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 ">
            Grammar
          </button>
          {isOpen && (
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-6 w-48 rounded-md shadow-lg  focus:outline-none  "
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/categories/jlptn5"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N5
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn4"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N4
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn3"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N3
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn2"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N2
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn1"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N1
              </Link>
            </div>
          )}
        </div>
        <Link href="/" className="  w-1/4 text-center">
          Vocabulary
        </Link>
        <Link href="/" className="  w-1/4 text-center">
          Topic
        </Link>
        <Link href="/contact" className="  w-1/4 text-center">
          About
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden fixed  sm:flex
        top-4 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2 px-3">
          Home
        </Link>
        {/*         <Link href="/" className="mr-2 px-3">
          Gojūon
        </Link> */}
        <div
          className="relative inline-block text-left px-3"
          onMouseEnter={handleMouseEnter}
        >
          <button className="inline-flex items-center  py-2 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 ">
            Grammar
          </button>
          {isOpen && (
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 rounded-md shadow-lg  focus:outline-none  "
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/categories/jlptn5"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N5
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn4"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N4
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn3"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N3
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn2"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N2
              </Link>
              <div className="border-t border-gray-200"></div>
              <Link
                href="/categories/jlptn1"
                className="block px-4 py-4 text-sm text-gray-700 bg-light/70 backdrop-blur-sm text-center"
                role="menuitem"
              >
                JLPT N1
              </Link>
            </div>
          )}
        </div>
        <Link href="/" className="mr-2 px-3">
          Vocabulary
        </Link>
        <Link href="/" className="mr-2 px-3">
          Topic
        </Link>
        <Link href="/contact" className="mx-2 px-3">
          About
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="  h-16 relative col-start-3 col-span-8 row-start-1 sm:ml-auto sm:row-start-2 sm:col-start-9 sm:col-span-4  lg:row-start-1 lg:col-start-10 lg:col-span-2">
        <Search />
      </div>

      <div className=" hidden sm:flex items-center  relative row-span-1 col-start-12">
        <a
          href={siteMetadata.twitter}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 ml-auto mt-3"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
