// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { AreaCompareForm } from "@/components/AreaCompareForm";

export default function AreaComparePage() {
  return (
    <>
      <NavBar />
      <div className="w-full h-[90vh] background flex items-center">
        <AreaCompareForm />
      </div>
    </>
  );
}
