"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { standard: "체류 밀집도", val: 150 },
  { standard: "체류/방문 비율", val: 80 },
  { standard: "혼잡도 변화율", val: 70 },
  { standard: "고객 유지율", val: 73 },
  { standard: "평균 체류시간 변화율", val: 60 },
  { standard: "시간대별 방문자 수 증가율", val: 30 },
];

const chartConfig = {
  val: {
    label: "val",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChartComp() {
  return (
    <Card
      style={{
        width: "100%",
        height: "40vh",
        outline: "none",
        color: "#FC8E3F",
      }}
    >
      <CardContent style={{ padding: 0, height: "100%", color: "#FC8E3F" }}>
        <ChartContainer
          config={chartConfig}
          style={{ width: "100%", height: "100%", color: "#FC8E3F" }}
        >
          <BarChart
            data={chartData}
            margin={{
              top: 2 * 1,
            }}
            className="rounded-md"
            style={{ color: "#FC8E3F" }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="standard"
              tickLine={false}
              tickMargin={1 * 1}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 6)} // 라벨 텍스트 길이 제한
              angle={-45} // 라벨을 기울여서 텍스트가 잘리지 않게 함
              textAnchor="end" // 라벨의 텍스트 방향을 맞춰줌
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="val" fill="#FC8E3F" radius={8}>
              <LabelList
                position="top"
                offset={1.5} // 상대 단위로 오프셋 조정
                className="fill-foreground"
                fontSize="0.75rem" // rem 단위로 글자 크기 설정
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
