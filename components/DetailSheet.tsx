import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PeopleNumLineChart } from "./PeopleNumLineChart";
import { StayVisitRatioChart } from "./StayVisitRatioChart";
import { CongestionChangeChart } from "./CongestionChangeChart";
import { StayPerVisitorChart } from "./StayPerVisitorChart";
// import { VisitConcentrationChart } from "./VisitConcentrationChart";
// import { PeakTimeChart } from "./PeakTimeChart";
import { StayTimeChangeChart } from "./StayTimeChangeChart";
// import { VisitorIncreaseChart } from "./VisitorIncreaseChart";
import { AgeGroupStayPatternChart } from "./AgeStayPatternChart";
import { CountryPatternChart } from "./CountryPattern";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface detailPropsType {
  areaIdx: number;
  areaName: string;
}

// 공통 타입 정의
interface HourlyDataType {
  zero: number;
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
  seven: number;
  eight: number;
  nine: number;
  ten: number;
  eleven: number;
  twelve: number;
  thirteen: number;
  fourteen: number;
  fifteen: number;
  sixteen: number;
  seventeen: number;
  eighteen: number;
  nineteen: number;
  twenty: number;
  twentyOne: number;
  twentyTwo: number;
  twentyThree: number;
}
interface agePatternType {
  Teenagers: {
    FEMALE: number;
    MALE: number;
  };
  Twenties: {
    FEMALE: number;
    MALE: number;
  };
  Thirties: {
    FEMALE: number;
    MALE: number;
  };
  Forties: {
    FEMALE: number;
    MALE: number;
  };
  Fifties: {
    FEMALE: number;
    MALE: number;
  };
  Sixties: {
    FEMALE: number;
    MALE: number;
  };
}
interface nationalityPatternType {
  Foreigner: number;
  Local: number;
}

export function DetailSheet({ areaIdx, areaName }: detailPropsType) {
  const [hourlyFloatingData, setHourlyFloatingData] = useState<HourlyDataType>({
    zero: 0,
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
    thirteen: 0,
    fourteen: 0,
    fifteen: 0,
    sixteen: 0,
    seventeen: 0,
    eighteen: 0,
    nineteen: 0,
    twenty: 0,
    twentyOne: 0,
    twentyTwo: 0,
    twentyThree: 0,
  });
  const [hourlyStayVisitRatioData, setHourlyStayVisitRatioData] =
    useState<HourlyDataType>({
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      thirteen: 0,
      fourteen: 0,
      fifteen: 0,
      sixteen: 0,
      seventeen: 0,
      eighteen: 0,
      nineteen: 0,
      twenty: 0,
      twentyOne: 0,
      twentyTwo: 0,
      twentyThree: 0,
    });
  const [hourlyCongestionRateChangeData, setHourlyCongestionRateChange] =
    useState<HourlyDataType>({
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      thirteen: 0,
      fourteen: 0,
      fifteen: 0,
      sixteen: 0,
      seventeen: 0,
      eighteen: 0,
      nineteen: 0,
      twenty: 0,
      twentyOne: 0,
      twentyTwo: 0,
      twentyThree: 0,
    });
  const [stayPerVisitorDurationData, setStayPerVisitorDurationData] =
    useState<HourlyDataType>({
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      thirteen: 0,
      fourteen: 0,
      fifteen: 0,
      sixteen: 0,
      seventeen: 0,
      eighteen: 0,
      nineteen: 0,
      twenty: 0,
      twentyOne: 0,
      twentyTwo: 0,
      twentyThree: 0,
    });

  const [hourlyAvgStayDurationChangeData, setHourlyAvgStayDurationChangeData] =
    useState<HourlyDataType>({
      zero: 0,
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      ten: 0,
      eleven: 0,
      twelve: 0,
      thirteen: 0,
      fourteen: 0,
      fifteen: 0,
      sixteen: 0,
      seventeen: 0,
      eighteen: 0,
      nineteen: 0,
      twenty: 0,
      twentyOne: 0,
      twentyTwo: 0,
      twentyThree: 0,
    });

  const [ageGroupStayPatternData, setAgeGroupStayPattern] =
    useState<agePatternType>({
      Teenagers: {
        FEMALE: 0,
        MALE: 0,
      },
      Twenties: {
        FEMALE: 0,
        MALE: 0,
      },
      Thirties: {
        FEMALE: 0,
        MALE: 0,
      },
      Forties: {
        FEMALE: 0,
        MALE: 0,
      },
      Fifties: {
        FEMALE: 0,
        MALE: 0,
      },
      Sixties: {
        FEMALE: 0,
        MALE: 0,
      },
    });
  const [nationalityStayPatternData, setNationalityStayPattern] =
    useState<nationalityPatternType>({
      Foreigner: 0,
      Local: 0,
    });
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://3.228.160.217:8080/api/details/${areaIdx}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);

      setHourlyFloatingData(data.hourlyFloatingPopulation);
      setHourlyStayVisitRatioData(data.hourlyStayVisitRatio);
      setHourlyCongestionRateChange(data.hourlyCongestionRateChange);
      setStayPerVisitorDurationData(data.stayPerVisitorDuration);
      setHourlyAvgStayDurationChangeData(data.hourlyAvgStayDurationChange);
      setAgeGroupStayPattern(data.ageGroupStayPattern);
      setNationalityStayPattern(data.nationalityStayPattern);

      return data;
    };

    if (areaIdx !== 0) {
      getData();
    }
  }, [areaIdx]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          className="areaAnalysis9 w-[45%] py-3 rounded-md"
          style={{ backgroundColor: "#8949FF" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Details
        </motion.button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="areaAnalysis4">
            {areaName} <span className="text-black">상권</span>
          </SheetTitle>
          <SheetDescription
            className="areaAnalysis3"
            style={{ marginTop: "1.55rem" }}
          >
            상권에 대한 세부 지표 정보를 제공합니다.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          <PeopleNumLineChart chartData={hourlyFloatingData} />
          <StayVisitRatioChart chartData={hourlyStayVisitRatioData} />
          <CongestionChangeChart chartData={hourlyCongestionRateChangeData} />
          <StayPerVisitorChart chartData={stayPerVisitorDurationData} />
          {/* <VisitConcentrationChart />
          <PeakTimeChart /> */}
          <StayTimeChangeChart chartData={hourlyAvgStayDurationChangeData} />
          <AgeGroupStayPatternChart chartData={ageGroupStayPatternData} />
          <CountryPatternChart chartData={nationalityStayPatternData} />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="areaAnalysis9 w-[25%] py-2 rounded-md mt-6"
              style={{ backgroundColor: "#8949FF" }}
            >
              Close
            </motion.button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
