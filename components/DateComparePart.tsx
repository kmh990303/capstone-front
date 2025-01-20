import { RadarChartComponent } from "./RadarChart";

import Image from "next/image";
import personLogo from "@/images/person.png";
import { useAreaStore } from "@/lib/store";
import { useEffect, useState } from "react";

interface DateComparePartPropsType {
  date: string;
  overallData: {
    population: number;
    stayVisit: number;
    visitConcentration: number;
    congestion: number;
    stayPerVisitor: number;
    stayTimeChange: number;
  };
  topTwo: {
    first: string;
    second: string;
  };
}

export const DateComparePart = ({
  date,
  overallData,
  topTwo,
}: DateComparePartPropsType) => {
  const { name } = useAreaStore();
  const [top, setTop] = useState<string>("");

  const chartData = Object.entries(overallData).map(([key, value]) => ({
    standard: key,
    ratio: value,
  }));

  useEffect(() => {
    if (topTwo.first === "population") setTop("유동 인구 수");
    else if (topTwo.first === "stayVisit") setTop("체류/방문 비율");
    else if (topTwo.first === "visitConcentration") setTop("방문 집중도");
    else if (topTwo.first === "congestion") setTop("혼잡도 변화율");
    else if (topTwo.first === "stayPerVisitor")
      setTop("체류 시간 대비 방문자 수");
    else if (topTwo.first === "stayTimeChange") setTop("평균 체류시간 변화율");
  }, [topTwo.first]);

  return (
    <>
      <div className="w-[50%] h-[90vh] flex flex-col border-x-2 border-gray-100">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2">
            <span className="areaAnalysis">{date}</span>
            <span className="areaAnalysis2">분석 결과입니다.</span>
          </h1>
        </div>

        <div className="mt-6 h-[50vh]">
          <div className="mt-6">
            <RadarChartComponent chartData={chartData} />
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
              <span className="areaAnalysis5">{top}</span>
              <span className="areaAnalysis6">이/가 가장 높아요</span>
            </p>
          </div>

          <div className="w-[90%] mt-3 mx-auto py-2">
            <p className="areaAnalysis8 w-full m-1">
              <span className="areaAnalysis7 m-1">{name}</span> 상권의{" "}
              <span className="areaAnalysis7 m-1">{date}</span> 분석 결과
              입니다.
            </p>
            <p className="areaAnalysis8 w-full m-1">
              <span className="areaAnalysis7 m-1">{top}</span>
              값이 가장 높게 나타나고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
