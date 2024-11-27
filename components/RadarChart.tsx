import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface RadarChartPropsType {
  chartData?: {
    standard: string;
    ratio: number;
  }[];
}

const chartConfig = {
  standard: {
    label: "standard",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RadarChartComponent({ chartData }: RadarChartPropsType) {
  if (!chartData)
    chartData = [
      { standard: "유동 인구 수", ratio: 60 },
      { standard: "체류/방문 비율", ratio: 70 },
      { standard: "혼잡도 변화율", ratio: 60 },
      { standard: "체류시간 대비 방문자 수", ratio: 39 },
      { standard: "방문 집중도", ratio: 50 },
      { standard: "평균 체류시간 변화율", ratio: 75 },
    ];

  return (
    <Card className="border-0 outline-none">
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto"
          style={{ width: "100%", height: "40vh" }}
        >
          <RadarChart
            data={chartData}
            style={{ width: "100%", height: "100%" }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis
              dataKey="standard"
              tickSize={15}
              tick={{ fontSize: 14, fill: "black" }}
              dy={4}
              className="areaAnalysis8"
            />
            <PolarGrid />
            <PolarRadiusAxis
              domain={[0, 100]} // 반지름 축의 최소값과 최댓값을 설정
              // tick={{ fontSize: 12, fill: "gray" }} // 눈금 스타일 설정
              axisLine={false} // 반지름 축 라인 제거
              // tickCount={6} // 눈금 개수 설정
            />
            <Radar dataKey="ratio" fill="#FC8E3F" fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
