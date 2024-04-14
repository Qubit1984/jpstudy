import { sortBlogsUpdate } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { MyadUnitrow } from "@/src/components/AdUnit";
const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogsUpdate(blogs);
  return (
    <section className="w-full mt-2 sm:mt-4  md:mt-6 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full h-15 items-end flex-col-reverse flex sm:flex-row">
        <h2 className="sm:w-1/2 w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Updates
        </h2>
        <div className="sm:w-1/2 w-full">
          <MyadUnitrow className="w-full h-15" />
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
