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
    }[]; // `overallData`는 배열
    date: string[];
  };
  after: {
    overallData: {
      population: number;
      stayVisit: number;
      congestion: number;
      stayPerVisitor: number;
      visitConcentration: number;
      stayTimeChange: number;
    }[]; // `overallData`는 배열
    date: string[];
  };
  changedFeature: {
    name: string[];
    value: number[];
  };
  selectedImproveIndex: number; // Carousel에서 전달받은 인덱스
}

export const ImprovePart = ({
  before,
  after,
  changedFeature,
  selectedImproveIndex,
}: changedDataPropsType) => {
  // selectedImproveIndex를 기반으로 before와 after의 overallData에서 해당 항목만 추출
  const leftChartData = before.overallData[selectedImproveIndex]; // `before`의 selectedImproveIndex에 해당하는 항목
  const rightChartData = after.overallData[selectedImproveIndex]; // `after`의 selectedImproveIndex에 해당하는 항목

  // changedFeature의 name과 value가 동적으로 변경될 때 대응
  const renderChangedFeature = () => {
    // name과 value 배열의 길이가 다를 경우 대비하여 안전하게 처리
    const names = changedFeature.name.length
      ? changedFeature.name[selectedImproveIndex]
      : "없음";
    const values = changedFeature.value.length
      ? changedFeature.value[selectedImproveIndex]
      : "없음";

    return (
      <span>
        <span className="areaAnalysis7 mr-1">{names}</span> 값 수치를{" "}
        <span className="areaAnalysis7 mr-1">{values}</span> 상승시킨 것에
        기여했습니다.
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
            overallData={leftChartData}
            date={before.date[selectedImproveIndex]}
          />
          {/* 오른쪽 차트에 `rightChartData` 전달 */}
          <ImproveRightChart
            overallData={rightChartData}
            date={after.date[selectedImproveIndex]}
          />
        </div>
        <div className="flex flex-col gap-2 mt-7 w-[90%] mx-auto">
          <p className="areaAnalysis_smallp">설명</p>
          <p className="areaAnalysis_smallp">{renderChangedFeature()}</p>
        </div>
      </div>
    </div>
  );
};
