import { RadarChartComponent } from "./RadarChart";
import Image from "next/image";
import personLogo from "@/images/person.png";

import { motion } from "framer-motion";

export const CompareResultPart = () => {
  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2 areaAnalysis_black">
            <span className="areaAnalysis">세종대</span> vs
            <span className="areaAnalysis_purple">이태원</span>
          </h1>
        </div>

        {/* <div className="h-[50vh] border-2 border-gray-100">
          <div className="flex flex-col gap-4 mt-6">
            <h3 className="areaAnalysis3 ml-8">세종대 상권 유형</h3>
            <h3 className="areaAnalysis4 ml-8">학생 중심 상권</h3>
          </div>
        </div> */}
      </div>
    </>
  );
};
