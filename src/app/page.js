import {
  allJlptN3s,
  allJlptN4s,
  allJlptN5s,
  allMains,
} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "Welcome to this Japanese learning station. ",
  "This site is continuously being updated.",
  "The update for JLPT N5 grammar is currently in progress.",
  "Thank you for support!",
];

export default function Home() {
  const allPosts = [...allMains, ...allJlptN3s, ...allJlptN4s, ...allJlptN5s];
  return (
    <main className="flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      <HomeCoverSection blogs={allMains} />
      <FeaturedPosts blogs={allPosts} />
      <RecentPosts blogs={allPosts} />
    </main>
  );
}
