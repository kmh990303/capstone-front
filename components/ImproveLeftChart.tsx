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
  population: { label: "유동인구 수", color: "hsl(var(--chart-1))" },
  stayVisit: { label: "체류 방문 비율", color: "hsl(var(--chart-2))" },
  congestion: { label: "방문 혼잡도", color: "hsl(var(--chart-3))" },
  stayPerVisitor: {
    label: "체류시간 당 방문자 수",
    color: "hsl(var(--chart-4))",
  },
  visitConcentration: { label: "방문 집중도", color: "hsl(var(--chart-5))" },
  stayTimeChange: { label: "체류 시간 변화율", color: "hsl(var(--chart-6))" },
} satisfies ChartConfig;

export function ImproveLeftChart({ overallData, date }: propsType) {
  // chartData로 변환할 때, chartConfig의 키와 일치하는 값만 매핑
  const chartData: ChartData[] = Object.keys(overallData)
    .filter((key) => key in chartConfig) // chartConfig에 키가 존재하는 경우에만 처리
    .map((key) => ({
      category: chartConfig[key as keyof typeof chartConfig].label, // 한글 레이블 사용
      value: overallData[key as keyof typeof overallData],
    }));

  return (
    <Card className="w-[50%] transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle>방안 이전 데이터</CardTitle>
        {/* 부모로부터 전달받은 date 값을 표시 */}
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData} // 변환된 chartData 사용
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="category"
              type="category"
              tick={false} // y축 값 숨기기
              tickLine={false} // y축 tick 선 숨기기
              axisLine={false} // y축 선 숨기기
              tickMargin={10}
            />
            <XAxis
              dataKey="value"
              type="number"
              reversed
              tick={true} // x축 값 숨기기
              tickLine={true} // x축 tick 선 숨기기
              axisLine={true} // x축 선 숨기기
            />
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
