"use client";

import NavBar from "@/components/NavBar";
import { ImprovePart } from "@/components/ImprovePart";
import { ImproveCarousel } from "@/components/ImproveCarousel";
import { useEffect, useState } from "react";

interface ImproveDataType {
  ImproveMethod: {
    image: string;
    name: string;
    date: string;
    area: string;
    detail: string;
    uuid: string;
  }[];
  beforeAndAfter: {
    before: {
      overallData: {
        population: number;
        stayVisit: number;
        congestion: number;
        stayPerVisitor: number;
        visitConcentration: number;
        stayTimeChange: number;
      }[];
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
      }[];
      date: string[];
    };
    changedFeature: {
      name: string[];
      value: number[];
    };
  };
}

export default function ImprovePage() {
  const [improveData, setImproveData] = useState<ImproveDataType>({
    ImproveMethod: [
      {
        image: "",
        name: "",
        date: "",
        area: "",
        detail: "",
        uuid: "",
      },
    ],
    beforeAndAfter: {
      before: {
        overallData: [
          {
            population: 0,
            stayVisit: 0,
            congestion: 0,
            stayPerVisitor: 0,
            visitConcentration: 0,
            stayTimeChange: 0,
          },
        ],
        date: [""],
      },
      after: {
        overallData: [
          {
            population: 0,
            stayVisit: 0,
            congestion: 0,
            stayPerVisitor: 0,
            visitConcentration: 0,
            stayTimeChange: 0,
          },
        ],
        date: [""],
      },
      changedFeature: {
        name: [""],
        value: [0],
      },
    },
  });
  const [selectedImproveIndex, setSelectedImproveIndex] = useState(0);

  // useEffect(() => {  
  //   const fetchData = async () => {
  //     const response = await fetch(`https://localens.duckdns.org/`)
  //   }
  // }, []); // 빈 배열은 이 useEffect가 컴포넌트 마운트 시 한 번만 실행되도록 보장

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[58%] h-[90vh] overflow-y-auto">
          <div className="w-full h-[10vh] border-2 border-gray-100 flex flex-col justify-center items-center">
            <h1 className="flex items-center gap-2 areaAnalysis_black">
              로컬렌즈에서 제시하는 개선 방안입니다.
            </h1>
          </div>
          <div className="w-full mx-auto flex justify-between items-center">
            <ImproveCarousel
              improveMethod={improveData.ImproveMethod}
              setSelectedImproveIndex={setSelectedImproveIndex}
            />
            <div className="flex flex-col areaAnalysis_ptaglw translate-y-3 py-24 px-6 max-w-[20vw] mr-10 mt-6 border-2 border-gray-100 shadow-lg">
              <p className="flex flex-col gap-1 mb-2">
                지역{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.ImproveMethod[selectedImproveIndex]?.area}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                기간{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.ImproveMethod[selectedImproveIndex]?.date}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                성격
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.ImproveMethod[selectedImproveIndex]?.detail}
                </span>
              </p>
            </div>
          </div>
        </div>

        <ImprovePart
          before={improveData.beforeAndAfter.before}
          after={improveData.beforeAndAfter.after}
          changedFeature={improveData.beforeAndAfter.changedFeature}
          selectedImproveIndex={selectedImproveIndex}
        />
      </div>
    </>
  );
}
