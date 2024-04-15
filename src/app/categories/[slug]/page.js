import {
  allGojuons,
  allJlptN5s,
  allJlptN4s,
  allJlptN3s,
  allHomes,
} from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";
import { sortBlogsByid } from "@/src/utils";
import { MyadUnit, MyadUnit2, MyadUnit1 } from "@/src/components/AdUnit";

const slugger = new GithubSlugger();
const allPosts = [
  ...allHomes,
  ...allGojuons,
  ...allJlptN5s,
  ...allJlptN4s,
  ...allJlptN3s,
];
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allPosts.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "Japanese Grammar" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }) => {
  // Separating logic to create list of categories from all blogs
  const allCategories = ["all"]; // Initialize with 'all' category
  allPosts.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();

  // Step 2: Filter blogs based on the current category (params.slug)
  const blogs = allPosts.filter((blog) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }
    return blog.tags.some((tag) => slug(tag) === params.slug);
  });
  const sortBlogs = sortBlogsByid(blogs);
  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col justify-center">
          <h1 className="mt-4 font-semibold text-2xl md:text-4xl lg:text-5xl">
            #{params.slug}
          </h1>
          <span className="mt-4 inline-block">
            Discover more categories and expand your knowledge!
          </span>
        </div>
        <div className="w-full sm:w-1/2 h-auto">
          <MyadUnit />
        </div>
      </div>

      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 grid-rows-2 gap-16 mt-3 sm:mt-5 md:mt-12 sxl:mt-16 px-5 sm:px-10 md:px-24 sxl:px-32">
        {sortBlogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
        <div className="lg:col-span-2 col-span-1 ">
          <MyadUnit1 />
        </div>
        <div className="lg:col-span-2 col-span-1">
          <MyadUnit2 />
        </div>
      </div>
    </article>
  );
};

export default CategoryPage;
