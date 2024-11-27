// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { DateComparePart } from "@/components/DateComparePart";

const chartData1 = [ // -> 이거 수정할 것
  { standard: "유동 인구 수", ratio: 60 },
  { standard: "체류/방문 비율", ratio: 70 },
  { standard: "혼잡도 변화율", ratio: 60 },
  { standard: "체류시간 대비 방문자 수", ratio: 48 },
  { standard: "방문 집중도", ratio: 50 },
  { standard: "평균 체류시간 변화율", ratio: 75 },
];
const chartData2 = [ // -> 이거 수정할 것
  { standard: "유동 인구 수", ratio: 80 },
  { standard: "체류/방문 비율", ratio: 75 },
  { standard: "혼잡도 변화율", ratio: 70 },
  { standard: "체류시간 대비 방문자 수", ratio: 80 },
  { standard: "방문 집중도", ratio: 80 },
  { standard: "평균 체류시간 변화율", ratio: 85 },
];

export default function DateCompareResultPage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <DateComparePart date="2024년 4월 20일" chartData={chartData1}/>
        <DateComparePart date="2024년 6월 27일" chartData={chartData2}/>
      </div>
    </>
  );
}
