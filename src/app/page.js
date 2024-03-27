import { allJlptN3s, allJlptN5s, allMains } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  const allPosts = [...allMains, ...allJlptN3s, ...allJlptN5s];
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allMains} />
      <FeaturedPosts blogs={allPosts} />
      <RecentPosts blogs={allPosts} />
    </main>
  );
}
