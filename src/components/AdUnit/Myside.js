"use client";
import dynamic from "next/dynamic";
const Myadsider2 = dynamic(
  () => import("./index").then((mod) => mod.Myadsider2),
  {
    ssr: false,
  }
);

export function Myadsider2Client() {
  return Myadsider2;
}
const Myadsider3 = dynamic(
  () => import("./index").then((mod) => mod.Myadsider2),
  {
    ssr: false,
  }
);

export function Myadsider3Client() {
  return Myadsider3;
}
const MyadUnitside = dynamic(
  () => import("./index").then((mod) => mod.MyadUnitside),
  {
    ssr: false,
  }
);

export function MyadUnitsideClient() {
  return MyadUnitside;
}
