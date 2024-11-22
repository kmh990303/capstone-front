// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { DateCompareForm } from "@/components/DateCompareForm";

export default function DateComparePage() {
  return (
    <>
      <NavBar />
      <div className="w-full h-[90vh] background flex items-center">
        <DateCompareForm />
      </div>
    </>
  );
}
