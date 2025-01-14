import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";

import { CustomRadarChartComponent } from "./CustomRadarChart";

export function CustomGraphChart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          className="areaAnalysis9 rounded-2xl px-5"
          style={{ backgroundColor: "#8949FF" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          피처 적용
        </motion.button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          {/* <SheetTitle className="areaAnalysis4">
            강남 <span className="text-black">상권</span>
          </SheetTitle> */}
          <SheetDescription
            className="areaAnalysis3"
            style={{ marginTop: "1.55rem" }}
          >
            커스텀 피처를 반영한 상권 유형 정보입니다.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col mt-4">
          <div className="flex flex-col">
            <SheetDescription
              className="areaAnalysis3 mb-3"
              style={{ marginTop: "1.55rem" }}
            >
              <span>강남</span>
            </SheetDescription>
            <CustomRadarChartComponent />
          </div>
          <div className="flex flex-col">
            <SheetDescription
              className="areaAnalysis3 mb-3"
              style={{ marginTop: "1.55rem" }}
            >
              <span>이태원</span>
            </SheetDescription>
            <CustomRadarChartComponent />
          </div>
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
