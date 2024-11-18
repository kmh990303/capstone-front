"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 연령대별 체류시간 데이터 (성별 포함)
const chartData = [
  { ageGroup: "10대", male: 5.2, female: 4.8 },
  { ageGroup: "20대", male: 6.5, female: 5.9 },
  { ageGroup: "30대", male: 7.1, female: 6.2 },
  { ageGroup: "40대", male: 6.4, female: 5.8 },
  { ageGroup: "50대", male: 6.0, female: 5.4 },
  { ageGroup: "60대", male: 5.5, female: 5.0 },
];

const chartConfig = {
  male: {
    label: "Male",
    color: "#FC8E3F", // 주황색 계열
  },
  female: {
    label: "Female",
    color: "#F5A16F", // 조금 더 연한 주황색
  },
} satisfies ChartConfig;

export function AgeGroupStayPatternChart() {
  return (
    <Card className="mt-7 w-full transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle className="areaAnalysis5">연령대별 체류 패턴</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="ageGroup"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <Tooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="male" fill="#FC8E3F" radius={4} />
            <Bar dataKey="female" fill="#F5A16F" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start text-sm">
        <div className="flex gap-2 font-medium leading-none areaAnalysis8 items-center">
          <span>
            <TrendingUp />
          </span>
          연령대별 체류 패턴입니다.
        </div>
      </CardFooter>
    </Card>
  );
}
