"use client";

import NavBar from "@/components/NavBar";
import { CompareResultPart } from "@/components/CompareResultPart";
import { RadarChartComponent } from "@/components/RadarChart";
import { CompareRadarChartComponent } from "@/components/CompareRadarChart";
import { dummyAreas } from "@/dummy/dummy";

import Image from "next/image";
import personLogo from "@/images/person.png";
import { useEffect, useState } from "react";
import { useAreaStore } from "@/lib/store";

interface districtType {
  districtInfo: {
    districtName: string;
    clusterName: string;
    latitude: number;
    longitude: number;
  };
  overallData: {
    population: number;
    stayVisit: number;
    congestion: number;
    stayPerVisitor: number;
    visitConcentration: number;
    stayTimeChange: number;
  };
  topTwo: {
    first: {
      value: number;
      name: string;
    };
    second: {
      value: number;
      name: string;
    };
  };
  // arrangedData: {
  //   population: number;
  //   stayVisit: number;
  //   congestion: number;
  //   stayPerVisitor: number;
  //   visitConcentration: number;
  //   stayTimeChange: number;
  // };
}

interface arrangedDataType {
  population: number;
  stayVisit: number;
  congestion: number;
  stayPerVisitor: number;
  visitConcentration: number;
  stayTimeChange: number;
}

interface differenceType {
  key1: {
    name: string;
    value1: number;
    value2: number;
  };
  key2: {
    name: string;
    value1: number;
    value2: number;
  };
  key3: {
    name: string;
    value1: number;
    value2: number;
  };
}

interface chartType {
  standard: string;
  ratio: number;
}

export default function CompareResultPage() {
  const { name, compareName, setGlobalAreaIdx, setGlobalCompareAreaIdx } =
    useAreaStore();
  const [areaData, setAreaData] = useState<districtType>({
    districtInfo: {
      districtName: "",
      clusterName: "",
      latitude: 0,
      longitude: 0,
    },
    overallData: {
      population: 0,
      stayVisit: 0,
      congestion: 0,
      stayPerVisitor: 0,
      visitConcentration: 0,
      stayTimeChange: 0,
    },
    topTwo: {
      first: {
        value: 0,
        name: "",
      },
      second: {
        value: 0,
        name: "",
      },
    },
    // arrangedData: {
    //   population: 0,
    //   stayVisit: 0,
    //   congestion: 0,
    //   stayPerVisitor: 0,
    //   visitConcentration: 0,
    //   stayTimeChange: 0,
    // },
  });
  const [compareAreaData, setCompareAreaData] = useState<districtType>({
    districtInfo: {
      districtName: "",
      clusterName: "",
      latitude: 0,
      longitude: 0,
    },
    overallData: {
      population: 0,
      stayVisit: 0,
      congestion: 0,
      stayPerVisitor: 0,
      visitConcentration: 0,
      stayTimeChange: 0,
    },
    topTwo: {
      first: {
        value: 0,
        name: "",
      },
      second: {
        value: 0,
        name: "",
      },
    },
    // arrangedData: {
    //   population: 0,
    //   stayVisit: 0,
    //   congestion: 0,
    //   stayPerVisitor: 0,
    //   visitConcentration: 0,
    //   stayTimeChange: 0,
    // },
  });
  const [differenceData, setDifferenceData] = useState<differenceType>({
    key1: {
      name: "",
      value1: 0,
      value2: 0,
    },
    key2: {
      name: "",
      value1: 0,
      value2: 0,
    },
    key3: {
      name: "",
      value1: 0,
      value2: 0,
    },
  });

  const [overallChartState1, setOverallChartState1] = useState<chartType[]>([
    {
      standard: "",
      ratio: 0,
    },
  ]);
  const [overallChartState2, setOverallChartState2] = useState<chartType[]>([
    {
      standard: "",
      ratio: 0,
    },
  ]);

  // areaIdx와 compareAreaIdx를 상태로 관리
  const [areaIdx, setAreaIdx] = useState<number>(0);
  const [compareAreaIdx, setCompareAreaIdx] = useState<number>(0);
  const [arrangedData1, setArrangedData1] = useState<arrangedDataType>({
    population: 0,
    stayVisit: 0,
    congestion: 0,
    stayPerVisitor: 0,
    visitConcentration: 0,
    stayTimeChange: 0,
  });
  const [arrangedData2, setArrangedData2] = useState<arrangedDataType>({
    population: 0,
    stayVisit: 0,
    congestion: 0,
    stayPerVisitor: 0,
    visitConcentration: 0,
    stayTimeChange: 0,
  });

  useEffect(() => {
    if (name) {
      const index = dummyAreas.indexOf(name);
      if (index > 0) {
        setAreaIdx(index);
        setGlobalAreaIdx(index);
      } // areaIdx 업데이트
    }
    if (compareName) {
      const index = dummyAreas.indexOf(compareName);
      if (index > 0) {
        setCompareAreaIdx(index);
        setGlobalCompareAreaIdx(index);
      } // compareAreaIdx 업데이트
    }
  }, [name, compareName, setGlobalAreaIdx, setGlobalCompareAreaIdx]);

  useEffect(() => {
    if (areaIdx !== -1 && compareAreaIdx !== -1) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://localens.duckdns.org/api/compare/${areaIdx}/${compareAreaIdx}`,
            {
              method: "GET",
            }
          );

          if (!response.ok) throw new Error("Failed to fetch data...");

          const data = await response.json();
          console.log(data);
          setAreaData(data.district1);
          setCompareAreaData(data.district2);
          setDifferenceData(data.topDifferences);
          setArrangedData1(data.district1.overallData);
          setArrangedData2(data.district2.overallData);

          const chartData1 = Object.entries(data.district1.overallData).map(
            ([key, value]) => ({
              standard: key,
              ratio: Number(value), // value를 number로 변환
            })
          );
          setOverallChartState1(chartData1);

          const chartData2 = Object.entries(data.district2.overallData).map(
            ([key, value]) => ({
              standard: key,
              ratio: Number(value), // value를 number로 변환
            })
          );
          setOverallChartState2(chartData2);

          return data;
        } catch (error) {
          console.error(error);
        }
      };

      if (areaIdx >= 0 && compareAreaIdx >= 0 && areaIdx !== compareAreaIdx) {
        fetchData();
      }
    }
  }, [areaIdx, compareAreaIdx]);

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[58%] h-[90vh]">
          <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
            <h1 className="flex items-center gap-2 areaAnalysis_black">
              <span className="areaAnalysis">
                {areaData.districtInfo.districtName}
              </span>
              에서
              <span className="areaAnalysis_purple">
                {compareAreaData.districtInfo.districtName}
              </span>
              처럼 되려면?
            </h1>
          </div>
          <div className="w-full h-[80vh] flex items-center">
            <div className="w-1/2 h-full border-2 border-gray-100">
              <div className="flex flex-col gap-4 h-[10vh] mt-10">
                <h3 className="areaAnalysis3 ml-8">
                  {areaData.districtInfo.districtName} 상권 유형
                </h3>
                <h3 className="areaAnalysis4 ml-8">
                  {areaData.districtInfo.clusterName}
                </h3>
              </div>

              <div>
                <RadarChartComponent chartData={overallChartState1} />
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
                  <span className="areaAnalysis5">
                    {areaData.topTwo.first.name}
                  </span>
                  <span className="areaAnalysis6">이 가장 높아요</span>
                </p>
              </div>
              <div className="w-[90%] mt-3 mx-auto py-2">
                <p className="areaAnalysis8 w-full m-1">
                  <span className="areaAnalysis7 mr-1">
                    {areaData.topTwo.first.name}
                  </span>
                  과
                  <span className="areaAnalysis7 m-1">
                    {areaData.topTwo.second.name}
                  </span>
                  이 높은 것으로 보아{" "}
                  <span>{areaData.districtInfo.clusterName}</span>입니다.
                </p>
              </div>
            </div>
            <div className="w-1/2 h-full border-2 border-gray-100">
              <div className="flex flex-col gap-4 h-[10vh] mt-10">
                <h3 className="areaAnalysis3 ml-8">
                  {compareAreaData.districtInfo.districtName} 상권 유형
                </h3>
                <h3 className="areaAnalysis4_purple ml-8">
                  {compareAreaData.districtInfo.clusterName}
                </h3>
              </div>

              <div>
                <CompareRadarChartComponent chartData={overallChartState2} />
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
                  <span className="areaAnalysis5_purple">
                    {compareAreaData.topTwo.first.name}
                  </span>
                  <span className="areaAnalysis6">이 가장 높아요</span>
                </p>
              </div>
              <div className="w-[90%] mt-3 mx-auto py-2">
                <p className="areaAnalysis8 w-full m-1">
                  <span className="areaAnalysis7p mr-1">
                    {compareAreaData.topTwo.first.name}
                  </span>
                  과
                  <span className="areaAnalysis7p m-1">
                    {compareAreaData.topTwo.second.name}
                  </span>
                  이 높은 것으로 보아{" "}
                  <span>{compareAreaData.districtInfo.clusterName}</span>입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CompareResultPart
          arrangedData1={arrangedData1}
          arrangedData2={arrangedData2}
          name={areaData.districtInfo.districtName}
          compareName={compareAreaData.districtInfo.districtName}
          differenceData={differenceData}
        />
      </div>
    </>
  );
}
