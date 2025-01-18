// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { DateComparePart } from "@/components/DateComparePart";
import { useEffect, useState } from "react";
import { useAreaStore } from "@/lib/store";
import { dummyAreas } from "@/dummy/dummy";

interface dateDataType {
  values: {
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

export default function DateCompareResultPage() {
  const { prevDate, curDate, name } = useAreaStore();
  const [prevDateData, setPrevDateData] = useState<dateDataType>({
    values: {
      population: 0,
      stayVisit: 0,
      visitConcentration: 0,
      congestion: 0,
      stayPerVisitor: 0,
      stayTimeChange: 0,
    },
    topTwo: {
      first: "",
      second: "",
    },
  });
  const [curDateData, setCurDateData] = useState<dateDataType>({
    values: {
      population: 0,
      stayVisit: 0,
      visitConcentration: 0,
      congestion: 0,
      stayPerVisitor: 0,
      stayTimeChange: 0,
    },
    topTwo: {
      first: "",
      second: "",
    },
  });
  const [prevFormattedDate, setPrevFormattedDate] = useState<string>("");
  const [curFormattedDate, setCurFormattedDate] = useState<string>("");

  useEffect(() => {
    if (!prevDate || !curDate || !name) {
      return; // 기본 조건 확인
    }
    const areaIdx = dummyAreas.indexOf(name) + 1;
    if (areaIdx < 1) {
      console.error("잘못된 지역 이름입니다:", name);
      return; // 잘못된 지역 이름일 경우 요청 중단
    }

    const parsedPrevDate = new Date(prevDate);
    const parsedCurDate = new Date(curDate);

    if (isNaN(parsedPrevDate.getTime()) || isNaN(parsedCurDate.getTime())) {
      console.error("유효하지 않은 날짜 형식입니다:", { prevDate, curDate });
      return; // 유효하지 않은 날짜일 경우 요청 중단
    }

    const prevYear = parsedPrevDate.getFullYear();
    const prevMonth = parsedPrevDate.getMonth() + 1;
    const prevDay = parsedPrevDate.getDate();
    setPrevFormattedDate(`${prevYear}년 ${prevMonth}월 ${prevDay}일`);

    const curYear = parsedCurDate.getFullYear();
    const curMonth = parsedCurDate.getMonth() + 1;
    const curDay = parsedCurDate.getDate();
    setCurFormattedDate(`${curYear}년 ${curMonth}월 ${curDay}일`);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://3.228.160.217:8080/api/datecompare/${areaIdx}?date1=${prevFormattedDate}&date2=${curFormattedDate}`
        );

        if (!response.ok) {
          throw new Error(
            `API 요청 실패: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setPrevDateData(data.date1);
        setCurDateData(data.date2);
      } catch (error) {
        console.error("데이터 요청 중 오류 발생:", error);
      }
    };

    if (
      prevDate &&
      curDate &&
      name &&
      prevFormattedDate !== "" &&
      curFormattedDate !== ""
    ) {
      fetchData();
    }
  }, [name, prevFormattedDate, curFormattedDate, prevDate, curDate]);
  return (
    <>
      <NavBar />
      <div className="flex">
        <DateComparePart
          date={prevFormattedDate}
          overallData={prevDateData.values}
          topTwo={prevDateData.topTwo}
        />
        <DateComparePart
          date={curFormattedDate}
          overallData={curDateData.values}
          topTwo={curDateData.topTwo}
        />
      </div>
    </>
  );
}
