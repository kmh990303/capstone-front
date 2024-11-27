"use client";

import { motion } from "framer-motion";
import { Input } from "./ui/input";
import React, { useState } from "react";

import { ImproveLeftChart } from "./ImproveLeftChart";
import { ImproveRightChart } from "./ImproveRightChart";

export const ImprovePart = () => {
  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col border-0 border-gray-100">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2 areaAnalysis_black">
            방안 전후 비교
          </h1>
        </div>
        <div className="border-x-2 border-gray-100 h-[80vh]">
          <p className="areaAnalysis_ptag mt-3">
            막대 그래프에 커서를 올리면 지표 이름과 수치를 확인할 수 있어요!
          </p>
          <div className="flex w-[90%] mx-auto mt-4">
            <ImproveLeftChart />
            <ImproveRightChart />
          </div>
          <div className="flex flex-col gap-2 mt-7 w-[90%] mx-auto">
            <p className="areaAnalysis_smallp">설명</p>
            <p className="areaAnalysis_smallp">
              <span className="areaAnalysis7 mr-1">
                [혼잡도 변화율, 국적별 체류 패턴]
              </span>{" "}
              값 수치를 <span className="areaAnalysis7 mr-1">각각 50, 30</span> 상승시킨 것에 기여했습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
