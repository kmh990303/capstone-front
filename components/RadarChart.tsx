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

// 영문 속성명과 한글 속성명 매핑
const standardMapping: { [key: string]: string } = {
  population: "유동 인구 수",
  stayVisit: "체류/방문 비율",
  congestion: "혼잡도 변화율",
  stayPerVisitor: "체류시간 대비 방문자 수",
  visitConcentration: "방문 집중도",
  stayTimeChange: "평균 체류시간 변화율",
};

const chartConfig = {
  standard: {
    label: "standard",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RadarChartComponent({ chartData }: RadarChartPropsType) {
  // chartData를 한글로 변환
  const transformedData = chartData?.map((data) => ({
    ...data,
    standard: standardMapping[data.standard] || data.standard, // 매핑된 한글 값으로 변환
  }));

  return (
    <Card className="border-0 outline-none">
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto"
          style={{ width: "100%", height: "40vh" }}
        >
          <RadarChart
            data={transformedData}
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
            />
            <Radar dataKey="ratio" fill="#FC8E3F" fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
