"use client";

import React from "react";
import { ImproveLeftChart } from "./ImproveLeftChart";
import { ImproveRightChart } from "./ImproveRightChart";

interface changedDataPropsType {
  before: {
    overallData: {
      population: number;
      stayVisit: number;
      congestion: number;
      stayPerVisitor: number;
      visitConcentration: number;
      stayTimeChange: number;
    };
    dates: string;
  };
  after: {
    overallData: {
      population: number;
      stayVisit: number;
      congestion: number;
      stayPerVisitor: number;
      visitConcentration: number;
      stayTimeChange: number;
    };
    dates: string;
  };
  changes: {
    name: string;
    value: number;
  };
}

export const ImprovePart = ({
  before,
  after,
  changes,
}: changedDataPropsType) => {
  const renderChangedFeature = () => {
    // name과 value 배열의 길이가 다를 경우 대비하여 안전하게 처리
    const names = changes.name ? changes.name : "없음";
    const values = changes.value !== null ? changes.value : "없음";

    return (
      <span>
        <span className="areaAnalysis7 mr-1">{names}</span> 값 수치를{" "}
        <span className="areaAnalysis7 mx-1">{values}</span> 변화시켰습니다.
      </span>
    );
  };

  return (
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
          {/* 왼쪽 차트에 `leftChartData` 전달 */}
          <ImproveLeftChart
            overallData={before.overallData}
            date={before.dates}
          />
          {/* 오른쪽 차트에 `rightChartData` 전달 */}
          <ImproveRightChart
            overallData={after.overallData}
            date={after.dates}
          />
        </div>
        <div className="flex flex-col gap-2 mt-7 w-[90%] mx-auto">
          <p className="areaAnalysis_smallp">설명</p>
          <p className="areaAnalysis_smallp">
            {changes !== null && renderChangedFeature()}
          </p>
        </div>
      </div>
    </div>
  );
};
