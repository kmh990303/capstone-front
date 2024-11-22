import { RadarChartComponent } from "./RadarChart";
import { DetailSheet } from "./DetailSheet";

import Image from "next/image";
import personLogo from "@/images/person.png";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useAreaStore } from "@/lib/store";

interface DateComparePartPropsType {
  date: string;
  //   featuresData : string[] 피처들 데이터
}

export const DateComparePart = ({ date }: DateComparePartPropsType) => {
  const router = useRouter();
  const { name, setName } = useAreaStore();

  const handleCompareButton = () => {
    router.push("/marketAreaAnalysis/compare");
  };

  const handleDateCompareButton = () => {
    router.push("/marketAreaAnalysis/dateCompare");
  };

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
            <RadarChartComponent />
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
              <span className="areaAnalysis5">시간대별 방문자 수 증가율</span>
              <span className="areaAnalysis6">이 가장 높아요</span>
            </p>
          </div>

          <div className="w-[90%] mt-3 mx-auto py-2">
            <p className="areaAnalysis8 w-full m-1">
              서울시 광진구에 위치한 세종대 상권의 2024년 시간대별 방문자 수
              증가율은 약<span className="areaAnalysis7 m-1">75%</span>입니다.
            </p>
            <p className="areaAnalysis8 w-full m-1">
              <span className="areaAnalysis7 mr-1">
                시간대별 방문자 수 증가율
              </span>
              과<span className="areaAnalysis7 m-1">체류 방문 비율</span>이 높은
              것으로 보아 학생 중심 상권입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
