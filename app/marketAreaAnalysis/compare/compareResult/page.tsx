"use client";

import NavBar from "@/components/NavBar";
import { CompareResultPart } from "@/components/CompareResultPart";
import { RadarChartComponent } from "@/components/RadarChart";
import { CompareRadarChartComponent } from "@/components/CompareRadarChart";

import Image from "next/image";
import personLogo from "@/images/person.png";

export default function CompareResultPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[58%] h-[90vh]">
          <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
            <h1 className="flex items-center gap-2 areaAnalysis_black">
              <span className="areaAnalysis">강남</span>에서
              <span className="areaAnalysis_purple">이태원</span>처럼 되려면?
            </h1>
          </div>
          <div className="w-full h-[80vh] flex items-center">
            <div className="w-1/2 h-full border-2 border-gray-100">
              <div className="flex flex-col gap-4 h-[10vh] mt-10">
                <h3 className="areaAnalysis3 ml-8">강남 상권 유형</h3>
                <h3 className="areaAnalysis4 ml-8">번화가 중심 상권</h3>
              </div>

              <div>
                <RadarChartComponent />
              </div>

              <div
                style={{ backgroundColor: "#FFE9D9" }}
                className="w-[90%] flex items-center mx-auto p-2 mt-8"
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
                  <span className="areaAnalysis5">체류시간 변화율</span>
                  <span className="areaAnalysis6">이 가장 높아요</span>
                </p>
              </div>
              <div className="w-[90%] mt-3 mx-auto py-2">
                <p className="areaAnalysis8 w-full m-1">
                  <span className="areaAnalysis7 mr-1">체류시간 변화율</span>과
                  <span className="areaAnalysis7 m-1">체류 방문 비율</span>이
                  높은 것으로 보아 <span>번화가</span> 중심 상권입니다.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-full border-2 border-gray-100">
              <div className="flex flex-col gap-4 h-[10vh] mt-10">
                <h3 className="areaAnalysis3 ml-8">이태원 상권 유형</h3>
                <h3 className="areaAnalysis4_purple ml-8">외국인 중심 상권</h3>
              </div>

              <div>
                <CompareRadarChartComponent />
              </div>

              <div
                style={{ backgroundColor: "#EBE0FF" }}
                className="w-[90%] flex items-center mx-auto p-2 mt-8"
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
                  <span className="areaAnalysis5_purple">혼잡도 변화율</span>
                  <span className="areaAnalysis6">이 가장 높아요</span>
                </p>
              </div>
              <div className="w-[90%] mt-3 mx-auto py-2">
                <p className="areaAnalysis8 w-full m-1">
                  <span className="areaAnalysis7p mr-1">혼잡도 변화율</span>과
                  <span className="areaAnalysis7p m-1">체류 방문 비율</span>이
                  높은 것으로 보아 <span>외국인</span> 중심 상권입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CompareResultPart />
      </div>
    </>
  );
}
