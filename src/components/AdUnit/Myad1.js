"use client";
import dynamic from "next/dynamic";
const Myad1 = dynamic(() => import("./index").then((mod) => mod.Myad1), {
  ssr: false,
});

export default function Myad1Client() {
  return <Myad1 />;
}
