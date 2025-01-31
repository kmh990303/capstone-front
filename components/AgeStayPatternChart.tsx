"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 기존 형식에 맞는 데이터 구조
interface ageStayPatternPropsType {
  chartData: {
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
  };
}

// 기존 데이터 형식으로 변환
const transformChartData = (
  chartData: ageStayPatternPropsType["chartData"]
) => {
  return [
    {
      ageGroup: "10대",
      male: chartData.Teenagers.MALE,
      female: chartData.Teenagers.FEMALE,
    },
    {
      ageGroup: "20대",
      male: chartData.Twenties.MALE,
      female: chartData.Twenties.FEMALE,
    },
    {
      ageGroup: "30대",
      male: chartData.Thirties.MALE,
      female: chartData.Thirties.FEMALE,
    },
    {
      ageGroup: "40대",
      male: chartData.Forties.MALE,
      female: chartData.Forties.FEMALE,
    },
    {
      ageGroup: "50대",
      male: chartData.Fifties.MALE,
      female: chartData.Fifties.FEMALE,
    },
    {
      ageGroup: "60대",
      male: chartData.Sixties.MALE,
      female: chartData.Sixties.FEMALE,
    },
  ];
};

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

export default function AgeGroupStayPatternChart({
  chartData,
}: ageStayPatternPropsType) {
  // chartData를 변환
  const transformedData = transformChartData(chartData);

  return (
    <Card className="mt-7 w-full transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle className="areaAnalysis5">연령대별 체류 패턴</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={transformedData}>
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
