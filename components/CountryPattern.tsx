"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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

// 방문자 수 데이터 (내국인, 외국인)
const chartData = [
  { country: "내국인", visitors: 255, fill: "#FC8E3F" },
  { country: "외국인", visitors: 20, fill: "#F5A16F" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "#FC8E3F", // 진한 주황색
  },
  foreign: {
    label: "Foreign Visitors",
    color: "#F5A16F", // 연한 주황색
  },
} satisfies ChartConfig;

export function CountryPatternChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="mt-7 w-full transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle className="areaAnalysis5">국적별 체류 패턴</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="country"
              innerRadius={60}
              outerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start text-sm">
        <div className="flex gap-2 font-medium leading-none areaAnalysis8 items-center">
          <span>
            <TrendingUp />
          </span>
          국적별 체류 패턴입니다.
        </div>
      </CardFooter>
    </Card>
  );
}
