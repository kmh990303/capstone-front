// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { DateComparePart } from "@/components/DateComparePart";

export default function DateCompareResultPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <DateComparePart date="2024년 4월 20일"/>
        <DateComparePart date="2024년 6월 27일"/>
      </div>
    </>
  );
}
