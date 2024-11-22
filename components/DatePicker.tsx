"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerPropsType {
  setDateData: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function DatePicker({ setDateData }: DatePickerPropsType) {
  const [date, setDate] = React.useState<Date>();

  const handleDate = (selectedDate: Date | undefined) => {
    setDate(selectedDate); // 내부 상태 업데이트
    setDateData(selectedDate); // 외부 상태 업데이트
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full max-w-[15rem] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, "PPP") : <span>날짜를 선택해주세요.</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDate} // 날짜 선택 시 handleDate 호출
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
