import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";
import { MyadUnit1, Myadrow, Myadstream, Myadstream0 } from "../AdUnit";
const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        <div className="col-span-1 w-full h-auto">
          <Myadstream0 />
        </div>
        {sortedBlogs.slice(0, 7).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
        <div className="col-span-1 w-full h-auto">
          <Myadstream />
        </div>
      </div>
      <div className="w-full flex h-auto mt-12 items-center">
        <div className="sm:w-1/2 w-full h-auto hidden sm:block">
          <Myadrow />
        </div>
        <div className="sm:w-1/2 w-full h-auto ">
          <MyadUnit1 />
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
