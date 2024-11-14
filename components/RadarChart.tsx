import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { standard: "체류 밀집도", ratio: 60 },
  { standard: "체류/방문 비율", ratio: 70 },
  { standard: "혼잡도 변화율", ratio: 60 },
  { standard: "고객 유지율", ratio: 39 },
  { standard: "평균 체류시간 변화율", ratio: 50 },
  { standard: "시간대별 방문자 수 증가율", ratio: 75 },
];

const chartConfig = {
  standard: {
    label: "standard",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RadarChartComponent() {
  return (
    <Card>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto"
          style={{ width: "100%", height: "40vh" }} // 세로 크기 상대 단위로 설정
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
              // 텍스트와 그래프 사이의 거리 조정 (x축)
              dy={4} // 텍스트와 그래프 사이의 거리 조정 (y축)
              className="areaAnalysis8"
            />
            <PolarGrid />
            <Radar dataKey="ratio" fill="#FC8E3F" fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
