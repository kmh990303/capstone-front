import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { dummyAreas } from "@/dummy/dummy.js";

interface SelectedAreaProps {
  setSelectedArea: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectArea({ setSelectedArea }: SelectedAreaProps) {
  return (
    <Select onValueChange={(value) => setSelectedArea(value)}>
      <SelectTrigger className="h-full bg-gray-100">
        <SelectValue placeholder="상권을 선택해주세요." />
      </SelectTrigger>
      <SelectContent className="max-h-40">
        <SelectGroup>
          <SelectLabel>상권명</SelectLabel>
          <>
            {dummyAreas.map((areaName) => (
              <SelectItem key={areaName} value={areaName} className="text-black">
                {areaName}
              </SelectItem>
            ))}
          </>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
