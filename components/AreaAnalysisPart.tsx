import { RadarChartComponent } from "./RadarChart";
import Image from "next/image";
import personLogo from "@/images/person.png";

import { motion } from "framer-motion";

export const AreaAnalysisPart = () => {
  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2">
            <span className="areaAnalysis">세종대</span>
            <span className="areaAnalysis2">상권 분석 결과입니다.</span>
          </h1>
        </div>

        <div className="mt-6 h-[50vh]">
          <div className="flex flex-col gap-4">
            <h3 className="areaAnalysis3 ml-8">세종대 상권 유형</h3>
            <h3 className="areaAnalysis4 ml-8">학생 중심 상권</h3>
          </div>

          <div>
            <RadarChartComponent />
          </div>

          <div
            style={{ backgroundColor: "#FFE9D9" }}
            className="w-[90%] flex items-center mx-auto p-2 mt-3"
          >
            <span>
              <Image
                src={personLogo}
                alt="personLogo"
                width={24}
                height={24}
                className="mr-2"
              />
            </span>
            <p className="flex items-center gap-3">
              <span className="areaAnalysis5">60대 이상, 여성</span>
              <span className="areaAnalysis6">피생 피처 값이 가장 높아요</span>
            </p>
          </div>

          <div className="w-[90%] mt-3 mx-auto py-2">
            <p className="areaAnalysis8 w-full m-1">
              서울시 광진구에 위치한 세종대 상권의 2024년 상반기 주거인구는 약
              <span className="areaAnalysis7 m-1">36,244</span>명입니다.
            </p>
            <p className="areaAnalysis8 w-full m-1">
              주거인구 비율은{" "}
              <span className="areaAnalysis7 m-1">60대 이상, 여성</span>이 가장
              높습니다.
            </p>
          </div>

          <div className="flex items-center justify-between mx-auto w-[90%] mt-4">
            <motion.button
              className="areaAnalysis9 w-[45%] py-3 rounded-md"
              style={{ backgroundColor: "#8949FF" }}
              whileHover={{ scale: 1.1 }}
            >
              Details
            </motion.button>
            <motion.button
              className="areaAnalysis10 w-[45%] py-3 rounded-md border-2 border-violet-400"
              style={{ backgroundColor: "#FFFFFF" }}
              whileHover={{ scale: 1.1 }}
            >
              Compare
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};
