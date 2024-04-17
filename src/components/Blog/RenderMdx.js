"use client";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import Example from "../Example";
import Myaudio from "../Audio";
import Gojuon from "../Gojuon";
import { MyadUnit1, Myadtext } from "../AdUnit";

const Spanred = ({ children, className, ...props }) => {
  return (
    <span className={`${className} text-red-600`} {...props}>
      {children}
    </span>
  );
};
const mdxComponents = {
  Image,
  Link,
  Spanred,
  Gojuon,
  Myaudio,
  Example,
  Myadtext,
  MyadUnit1,
};

/*    first-letter:text-3xl
    sm:first-letter:text-5xl */
const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      className="col-span-12 lg:col-span-7 lg:col-start-4 font-in prose sm:prose-base md:prose-lg max-w-max
    no-quotes
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
