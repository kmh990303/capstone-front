import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { VisitConcentrationChart } from "./VisitConcentrationChart";
import { PeakTimeChart } from "./PeakTimeChart";
import { StayTimeChangeChart } from "./StayTimeChangeChart";
import { VisitorIncreaseChart } from "./VisitorIncreaseChart";
import { AgeGroupStayPatternChart } from "./AgeStayPatternChart";
import { CountryPatternChart } from "./CountryPattern";

import { motion } from "framer-motion";

export function DetailSheet() {
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
            세종대 <span className="text-black">상권</span>
          </SheetTitle>
          <SheetDescription
            className="areaAnalysis3"
            style={{ marginTop: "1.55rem" }}
          >
            상권에 대한 세부 지표 정보를 제공합니다.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          <PeopleNumLineChart />
          <StayVisitRatioChart />
          <CongestionChangeChart />
          <StayPerVisitorChart />
          <VisitConcentrationChart />
          <PeakTimeChart />
          <StayTimeChangeChart />
          <VisitorIncreaseChart />
          <AgeGroupStayPatternChart />
          <CountryPatternChart />
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
