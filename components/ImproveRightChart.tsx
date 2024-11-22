"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { feature: "유동 인구 수", prev: 186, cur: 80 },
  { feature: "체류/방문 비율", prev: 305, cur: 200 },
  { feature: "혼잡도 변화율", prev: 237, cur: 120 },
  { feature: "체류시간 대비 방문자 수", prev: 73, cur: 190 },
  { feature: "방문 집중도", prev: 209, cur: 130 },
  { feature: "평균 체류시간 변화율", prev: 214, cur: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export function ImproveRightChart() {
  return (
    <Card className="w-[50%] transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle>방안 이후 데이터</CardTitle>
        <CardDescription>2024년 6월</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="feature" // feature로 수정
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="prev" type="number" hide /> {/* prev로 수정 */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="cur" // prev로 수정
              layout="vertical"
              fill="var(--color-desktop)"
              radius={4}
            >
              {/* <LabelList
                dataKey="feature" // feature로 수정
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              /> */}
              {/* <LabelList
                dataKey="prev" // prev로 수정
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              /> */}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
