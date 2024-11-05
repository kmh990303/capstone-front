// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import MapComponent from "@/components/MapComponent";
import { AreaAnalysisPart } from "@/components/AreaAnalysisPart";

export default function MarketAreaAnalysisPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <MapComponent />
        <AreaAnalysisPart />
      </div>
    </>
  );
}
