import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "Welcome to this Japanese learning station. ",
  "This site is continuously being updated.",
  "Thank you for your support!",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
