"use client";

import { CustomCompareChartComponent } from "./CustomCompareChart";
import Image from "next/image";
import personLogo from "@/images/person.png";

import { useAreaStore } from "@/lib/store";

interface districtType {
  clusterName: string;
  districtName: string;
  customFeature: {
    name: string;
    value: number;
  };
  overallData: {
    congestion: number;
    population: number;
    stayPerVisitor: number;
    stayTimeChange: number;
    stayVisit: number;
    visitConcentration: number;
  };
  top: {
    name: string;
    value: number;
  };
}

interface DateComparePartPropsType {
  idx: number;
  districtData: districtType;
}

const standardNameMapping: Record<string, string> = {
  population: "유동 인구 수",
  stayVisit: "체류/방문 비율",
  congestion: "혼잡도 변화율",
  stayPerVisitor: "체류시간 대비 방문자 수",
  visitConcentration: "방문 집중도",
  stayTimeChange: "평균 체류시간 변화율",
};

// idx가 1이면 메인 상권, 2이면 비교 상권
export const CustomGraphPart = ({
  idx,
  districtData,
}: DateComparePartPropsType) => {
  const { name, compareName } = useAreaStore();

  // 스타일 조건에 따른 클래스 설정
  let analysis = idx === 1 ? "areaAnalysis" : "areaAnalysis_purple";
  let analysis5 = idx === 1 ? "areaAnalysis5" : "areaAnalysis5_purple";
  let analysis7 = idx === 1 ? "areaAnalysis7" : "areaAnalysis7p";

  // 배경색 설정
  let backGround = idx === 1 ? "#FFE9D9" : "#EBE0FF";
  let color = idx === 1 ? "#FC8E3F" : "#8C4FFF";

  // 현재 상권 이름
  const area = idx === 1 ? name : compareName;

  // 전체 데이터 병합
  const beforeChartData = [
    ...Object.entries(districtData.overallData).map(([key, value]) => ({
      standard: key,
      ratio: value,
    })),
    {
      standard: districtData.customFeature.name,
      ratio: districtData.customFeature.value,
    },
  ];

  const chartData = beforeChartData
    .map((item) => ({
      ...item,
      koreanStandard: standardNameMapping[item.standard] || item.standard,
    }))
    .sort((a, b) => b.ratio - a.ratio);

  const featureName =
    standardNameMapping[chartData[0]?.standard] ||
    chartData[0]?.standard ||
    "N/A";
  const featureValue = chartData[0]?.ratio || 0;

  return (
    <div className="w-[50%] h-[90vh] flex flex-col border-x-2 border-gray-100">
      <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
        <h1 className="flex items-center gap-2">
          <span className={`${analysis}`}>{area}</span>
          <span className="areaAnalysis2">분석 결과입니다.</span>
        </h1>
      </div>

      <div className="mt-6 h-[50vh]">
        <div className="mt-6">
          <CustomCompareChartComponent
            chartData={beforeChartData}
            color={color}
          />
        </div>

        <div
          style={{
            background: backGround,
            borderRadius: "8px",
            color: idx === 1 ? "#333" : "#FFF",
          }}
          className="w-[90%] flex items-center mx-auto p-2 mt-3 shadow-md"
        >
          <Image
            src={personLogo}
            alt="personLogo"
            width={24}
            height={24}
            className="mr-2"
          />
          <p className="flex items-center gap-3">
            <span className={`${analysis5}`}>{featureName}</span>
            <span className="areaAnalysis6">이 가장 높아요</span>
          </p>
        </div>

        <div className="w-[90%] mt-3 mx-auto py-2">
          <p className="areaAnalysis8 w-full m-1">
            <span className={`${analysis7} m-1`}>{area}</span> 분석 결과입니다.
          </p>
          <p className="areaAnalysis8 w-full m-1">
            <span className={`${analysis7} m-1`}>{featureName}</span> 값이{" "}
            <span className={`${analysis7} m-1`}>{featureValue}</span>의 수치로
            가장 높게 나타나고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
