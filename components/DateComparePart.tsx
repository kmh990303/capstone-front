import { RadarChartComponent } from "./RadarChart";
import { DetailSheet } from "./DetailSheet";

import Image from "next/image";
import personLogo from "@/images/person.png";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useAreaStore } from "@/lib/store";

interface DateComparePartPropsType {
  date: string;
  chartData?: {
    standard: string;
    ratio: number;
  }[];
  //   featuresData : string[] 피처들 데이터
}

export const DateComparePart = ({
  date,
  chartData,
}: DateComparePartPropsType) => {
  const router = useRouter();
  const { name, setName } = useAreaStore();
  let featureName;
  let featureValue;

  const handleCompareButton = () => {
    router.push("/marketAreaAnalysis/compare");
  };

  const handleDateCompareButton = () => {
    router.push("/marketAreaAnalysis/dateCompare");
  };

  if (chartData) chartData = chartData.sort((a, b) => b.ratio - a.ratio);
  if (chartData) {
    featureName = chartData[0].standard;
    featureValue = chartData[0].ratio;
  }

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
              <span className="areaAnalysis5">{featureName}</span>
              <span className="areaAnalysis6">이 가장 높아요</span>
            </p>
          </div>

          <div className="w-[90%] mt-3 mx-auto py-2">
            <p className="areaAnalysis8 w-full m-1">
              <span className="areaAnalysis7 m-1">강남</span> 상권의{" "}
              <span className="areaAnalysis7 m-1">{date}</span> 분석 결과
              입니다.
            </p>
            <p className="areaAnalysis8 w-full m-1">
              <span className="areaAnalysis7 m-1">{featureName}</span>
              값이<span className="areaAnalysis7 m-1">{featureValue}</span> 의
              수치로 가장 높게 나타나고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
