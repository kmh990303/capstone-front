"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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

interface propsType {
  overallData: {
    population: number;
    stayVisit: number;
    congestion: number;
    stayPerVisitor: number;
    visitConcentration: number;
    stayTimeChange: number;
  };
  date: string;
}

// chartData와 chartConfig 타입 정의
interface ChartData {
  category: string;
  value: number;
}

const chartConfig = {
  population: { label: "Population", color: "hsl(var(--chart-1))" },
  stayVisit: { label: "Stay Visit", color: "hsl(var(--chart-2))" },
  congestion: { label: "Congestion", color: "hsl(var(--chart-3))" },
  stayPerVisitor: { label: "Stay/Visitor", color: "hsl(var(--chart-4))" },
  visitConcentration: {
    label: "Visit Concentration",
    color: "hsl(var(--chart-5))",
  },
  stayTimeChange: { label: "Stay Time Change", color: "hsl(var(--chart-6))" },
} satisfies ChartConfig;

export function ImproveRightChart({ overallData, date }: propsType) {
  // chartData로 변환할 때, chartConfig의 키와 일치하는 값만 매핑
  const chartData: ChartData[] = Object.keys(overallData)
    .filter((key) => key in chartConfig) // chartConfig에 키가 존재하는 경우에만 처리
    .map((key) => ({
      category: chartConfig[key as keyof typeof chartConfig].label,
      value: overallData[key as keyof typeof overallData],
    }));

  return (
    <Card className="w-[50%] transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle>방안 이후 데이터</CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData} // 부모에서 전달받은 데이터를 사용
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="value" type="number" reversed hide={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="value"
              fill="hsl(var(--chart-1))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
