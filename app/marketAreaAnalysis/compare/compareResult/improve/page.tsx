"use client";

import NavBar from "@/components/NavBar";
import { ImprovePart } from "@/components/ImprovePart";
import { ImproveCarousel } from "@/components/ImproveCarousel";
import { useEffect, useState } from "react";
import { useAreaStore } from "@/lib/store";

interface ImproveDataType {
  improveMethod: {
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
  const { globalAreaIdx, globalCompareAreaIdx } = useAreaStore();
  const [improveData, setImproveData] = useState<ImproveDataType>({
    improveMethod: [
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
  const [selectedImproveIndex, setSelectedImproveIndex] = useState(0); // 인덱스를 선택

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://13.125.95.219:8080/api/improvements/recommendations/${globalAreaIdx}/${globalCompareAreaIdx}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);

      setImproveData(data);

      return data;
    };

    if (globalAreaIdx > 0 && globalCompareAreaIdx > 0) {
      fetchData();
    }
  }, [globalAreaIdx, globalCompareAreaIdx]);

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
              improveMethod={improveData.improveMethod}
              onItemSelect={(index) => setSelectedImproveIndex(index)} // 인덱스 넘겨받기
            />
            <div className="flex flex-col areaAnalysis_ptaglw translate-y-3 py-24 px-6 max-w-[20vw] mr-10 border-2 border-gray-100 shadow-lg">
              <p className="flex flex-col gap-1 mb-2">
                지역{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.improveMethod[selectedImproveIndex]?.area}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                기간{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.improveMethod[selectedImproveIndex]?.date}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                성격
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.improveMethod[selectedImproveIndex]?.detail}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 선택된 인덱스를 넘겨서 해당 데이터를 표시 */}
        <ImprovePart
          before={improveData.beforeAndAfter.before}
          after={improveData.beforeAndAfter.after}
          changedFeature={improveData.beforeAndAfter.changedFeature}
          selectedImproveIndex={selectedImproveIndex} //현재 가리키는 carousel 아이템 인덱스
        />
      </div>
    </>
  );
}
