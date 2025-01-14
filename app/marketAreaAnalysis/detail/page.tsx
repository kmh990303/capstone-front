// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
// import MapComponent from "@/components/MapComponent";
import { AreaAnalysisDetailPart } from "@/components/AreaAnalysisDetailPart";

export default function MarketAreaAnalysisDetailPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        {/* <MapComponent /> */}
        <AreaAnalysisDetailPart />
      </div>
    </>
  );
}
