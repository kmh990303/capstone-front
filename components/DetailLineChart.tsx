"use client"; // 유지 보수용 컴포넌트 리팩토링 필요!!

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// interface LineChartPropsType {
//   data: {
//     hour: string | null;
//     people: number | 0;
//   };
//   areaName: string;
//   feature: string;
// }

const chartData = [
  { hour: "0시", people: 50 },
  { hour: "1시", people: 40 },
  { hour: "2시", people: 30 },
  { hour: "3시", people: 20 },
  { hour: "4시", people: 15 },
  { hour: "5시", people: 25 },
  { hour: "6시", people: 60 },
  { hour: "7시", people: 120 },
  { hour: "8시", people: 200 },
  { hour: "9시", people: 250 },
  { hour: "10시", people: 300 },
  { hour: "11시", people: 320 },
  { hour: "12시", people: 400 },
  { hour: "13시", people: 390 },
  { hour: "14시", people: 350 },
  { hour: "15시", people: 340 },
  { hour: "16시", people: 360 },
  { hour: "17시", people: 380 },
  { hour: "18시", people: 400 },
  { hour: "19시", people: 420 },
  { hour: "20시", people: 380 },
  { hour: "21시", people: 340 },
  { hour: "22시", people: 280 },
  { hour: "23시", people: 200 },
];

const chartConfig = {
  people: {
    label: "People",
    color: "#FC8E3F",
  },
} satisfies ChartConfig;

export function PeopleNumLineChart() {
  return (
    <Card className="mt-7 w-full">
      <CardHeader>
        <CardTitle className="areaAnalysis5">시간대별 유동 인구 수</CardTitle>
      </CardHeader>
      <CardContent className="relative w-full">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 16,
              left: 16,
              right: 16,
              bottom: 16,
            }}
            style={{ width: "100%", height: "20rem" }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value) => {
                // 시간 값을 3으로 나누어 3시간 단위만 표시
                const hour = parseInt(value.replace("시", ""));
                return hour % 3 === 0 ? value : "";
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name, props) =>
                    `${props.payload.hour}: ${value}명`
                  } // 툴팁에서 시간대와 인원수 표시
                  hideLabel // People 대신 시간대 표시
                />
              }
            />
            <Line
              dataKey="people"
              type="monotone"
              stroke="#FC8E3F"
              strokeWidth={2}
              dot={{
                fill: "#FC8E3F",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start text-sm">
        <div className="flex gap-2 font-medium leading-none areaAnalysis8 items-center">
          <span>
            <TrendingUp />
          </span>
          시간대별 평균 유동 인구 변화 추이입니다.
        </div>
      </CardFooter>
    </Card>
  );
}
