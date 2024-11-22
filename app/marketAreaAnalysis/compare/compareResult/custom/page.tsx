"use client";

import NavBar from "@/components/NavBar";
import { CustomPart } from "@/components/CustomPart";
import { FeatureTable } from "@/components/FeatureTable";

export default function CustomPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[58%] h-[90vh] overflow-y-auto">
          <div className="w-full h-[10vh] border-2 border-gray-100 flex flex-col justify-center items-center">
            <h1 className="flex items-center gap-2 areaAnalysis_black">
              로컬렌즈에서 제공하는 지표 리스트입니다.
            </h1>
          </div>
          <FeatureTable />
        </div>
        <CustomPart />
      </div>
    </>
  );
}
