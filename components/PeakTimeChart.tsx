"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

// 시간대와 사람 수 데이터
const chartData = [
  { hour: "0시", people: 120 },
  { hour: "1시", people: 150 },
  { hour: "2시", people: 200 },
  { hour: "3시", people: 180 },
  { hour: "4시", people: 90 },
  { hour: "5시", people: 140 },
  { hour: "6시", people: 250 },
  { hour: "7시", people: 300 },
  { hour: "8시", people: 280 },
  { hour: "9시", people: 210 },
  { hour: "10시", people: 240 },
  { hour: "11시", people: 220 },
  { hour: "12시", people: 300 },
  { hour: "13시", people: 280 },
  { hour: "14시", people: 250 },
  { hour: "15시", people: 190 },
  { hour: "16시", people: 210 },
  { hour: "17시", people: 230 },
  { hour: "18시", people: 270 },
  { hour: "19시", people: 290 },
  { hour: "20시", people: 200 },
  { hour: "21시", people: 180 },
  { hour: "22시", people: 150 },
  { hour: "23시", people: 120 },
];

const chartConfig = {
  people: {
    label: "People",
    color: "#FC8E3F",
  },
} satisfies ChartConfig;

export function PeakTimeChart() {
  return (
    <Card className="mt-7 w-full transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle className="areaAnalysis5">최다 혼잡 시간대</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 20,
              right: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={true} /> {/* vertical을 true로 변경 */}
            <XAxis
              dataKey="hour"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              tickFormatter={(value, index) => {
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
            <Bar dataKey="people" fill="#FC8E3F" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start text-sm">
        <div className="flex gap-2 font-medium leading-none areaAnalysis8 items-center">
          <span>
            <TrendingUp />
          </span>
          최다 혼잡대 시간은 12시입니다.
        </div>
      </CardFooter>
    </Card>
  );
}
