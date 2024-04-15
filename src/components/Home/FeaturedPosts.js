import { sortBlogsUpdate } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { MyadUnit } from "@/src/components/AdUnit";
import { BotMessageSquare } from "lucide-react";
import Link from "next/link";
const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogsUpdate(blogs);
  return (
    <section className="w-full mt-2 sm:mt-4  md:mt-6 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full h-36 items-end flex-col-reverse flex sm:flex-row">
        <div className="sm:w-1/2 w-full flex flex-col items-start ">
          <Link
            className="flex heartbeat items-center justify-center mb-8 h-18 px-4 bg-accent dark:bg-accentDark text-white dark:text-dark  rounded-full duration-200 ease-in-out hover:scale-110  hover:underline 
            "
            href="https://ai.japanesegrammar.tokyo"
          >
            <BotMessageSquare className="h-16 w-16 mr-4 ml-4 my-2" />
            <span className="text-2xl py-2 mr-6">
              Practicing spoken Japanese by chatting with AI.
            </span>
          </Link>
          <h2 className=" inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Recent Updates
          </h2>
        </div>

        <div className="sm:w-1/2 w-auto h-full">
          <MyadUnit />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2  gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2 row-span-1 sxl:col-span-1 sxl:row-span-2  relative">
          <BlogLayoutOne blog={sortedBlogs[0]} />
        </article>
        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
