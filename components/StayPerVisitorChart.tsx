"use client";

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

interface stayPerVisitorPropsType {
  chartData: {
    zero: number;
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
    six: number;
    seven: number;
    eight: number;
    nine: number;
    ten: number;
    eleven: number;
    twelve: number;
    thirteen: number;
    fourteen: number;
    fifteen: number;
    sixteen: number;
    seventeen: number;
    eighteen: number;
    nineteen: number;
    twenty: number;
    twentyOne: number;
    twentyTwo: number;
    twentyThree: number;
  };
}

const chartConfig = {
  ratio: {
    label: "Change Ratio",
    color: "#FC8E3F",
  },
} satisfies ChartConfig;

export function StayPerVisitorChart({ chartData }: stayPerVisitorPropsType) {
  const formattedData = Object.entries(chartData).map(([key, value]) => {
    const hourMap: { [key: string]: string } = {
      zero: "0시",
      one: "1시",
      two: "2시",
      three: "3시",
      four: "4시",
      five: "5시",
      six: "6시",
      seven: "7시",
      eight: "8시",
      nine: "9시",
      ten: "10시",
      eleven: "11시",
      twelve: "12시",
      thirteen: "13시",
      fourteen: "14시",
      fifteen: "15시",
      sixteen: "16시",
      seventeen: "17시",
      eighteen: "18시",
      nineteen: "19시",
      twenty: "20시",
      twentyOne: "21시",
      twentyTwo: "22시",
      twentyThree: "23시",
    };

    return {
      hour: hourMap[key] || key, // 키를 한글 시간대 형식으로 변환
      ratio: value, // 인원 수 값 유지
    };
  });
  return (
    <Card className="mt-7 w-full transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle className="areaAnalysis5">체류시간 대비 방문자 수</CardTitle>
      </CardHeader>
      <CardContent className="relative w-full">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={formattedData}
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
                    `${props.payload.hour}: ${value}%`
                  } // 툴팁에서 시간대와 인원수 표시
                  hideLabel // People 대신 시간대 표시
                />
              }
            />
            <Line
              dataKey="ratio"
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
          체류시간 대비 방문자 수 변화 추이입니다.
        </div>
      </CardFooter>
    </Card>
  );
}
