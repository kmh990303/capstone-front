"use client";

import NavBar from "@/components/NavBar";
import { ImprovePart } from "@/components/ImprovePart";
import { ImproveCarousel } from "@/components/ImproveCarousel";
import { useEffect, useState } from "react";
import { useAreaStore } from "@/lib/store";

interface ImproveDataType {
  recommendedEvents: {
    uuid: string;
    name: string;
    imageUrl: string;
    place: string;
    period: string;
    detail: string;
  }[];
  comparisonData: {
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
  }[];
}

export default function ImprovePage() {
  const globalAreaIdx = useAreaStore((state) => state.globalAreaIdx);
  const globalCompareAreaIdx = useAreaStore(
    (state) => state.globalCompareAreaIdx
  );
  const [improveData, setImproveData] = useState<ImproveDataType>({
    recommendedEvents: [
      {
        imageUrl: "",
        name: "",
        period: "",
        place: "",
        detail: "",
        uuid: "",
      },
    ],
    comparisonData: [
      {
        before: {
          overallData: {
            population: 0,
            stayVisit: 0,
            congestion: 0,
            stayPerVisitor: 0,
            visitConcentration: 0,
            stayTimeChange: 0,
          },
          dates: "",
        },
        after: {
          overallData: {
            population: 0,
            stayVisit: 0,
            congestion: 0,
            stayPerVisitor: 0,
            visitConcentration: 0,
            stayTimeChange: 0,
          },
          dates: "",
        },
        changes: {
          name: "",
          value: 0,
        },
      },
    ],
  });
  const [selectedImproveIndex, setSelectedImproveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localens.duckdns.org/api/improvements/recommendations/${globalAreaIdx}/${globalCompareAreaIdx}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Data...");
      }

      const data = await response.json();
      console.log(data);

      setImproveData(data);

      return data;
    };

    if (
      globalAreaIdx >= 0 &&
      globalCompareAreaIdx >= 0 &&
      globalAreaIdx !== globalCompareAreaIdx
    ) {
      fetchData();
    }
  }, [globalAreaIdx, globalCompareAreaIdx]);

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[58%] h-[90vh] overflow-y-auto">
          <div className="w-full h-[10vh] border-2 border-gray-100 flex flex-col justify-center items-center">
            <p className="flex items-center gap-2 areaAnalysis_black">
              로컬렌즈에서 제시하는 개선 방안입니다.
            </p>
          </div>
          <div className="w-full mx-auto flex justify-between items-center">
            <ImproveCarousel
              recommendedEvents={improveData.recommendedEvents}
              setSelectedImproveIndex={setSelectedImproveIndex}
            />
            <div className="flex flex-col areaAnalysis_ptaglw translate-y-3 py-24 px-6 max-w-[20vw] mr-10 mt-6 border-2 border-gray-100 shadow-lg">
              <p className="flex flex-col gap-1 mb-2">
                지역{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.recommendedEvents[selectedImproveIndex]?.place}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                기간{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.recommendedEvents[selectedImproveIndex]?.period}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                성격
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.recommendedEvents[selectedImproveIndex]?.detail}
                </span>
              </p>
            </div>
          </div>
        </div>

        <ImprovePart
          before={improveData.comparisonData[selectedImproveIndex].before}
          after={improveData.comparisonData[selectedImproveIndex].after}
          changes={improveData.comparisonData[selectedImproveIndex].changes}
        />
      </div>
    </>
  );
}
