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

import { useAreaStore } from "@/lib/store";

interface SelectedAreaProps {
  setSelectedArea: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectArea({ setSelectedArea }: SelectedAreaProps) {
  const { name } = useAreaStore();
  console.log(name);
  let CompareAreaList = dummyAreas.filter((area) => area !== name);

  return (
    <Select onValueChange={(value) => setSelectedArea(value)}>
      <SelectTrigger className="h-full bg-gray-100">
        <SelectValue placeholder="상권을 선택해주세요." />
      </SelectTrigger>
      <SelectContent className="max-h-40">
        <SelectGroup>
          <SelectLabel>상권명</SelectLabel>
          <>
            {CompareAreaList.map((areaName) => (
              <SelectItem
                key={areaName}
                value={areaName}
                className="text-black"
              >
                {areaName}
              </SelectItem>
            ))}
          </>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
