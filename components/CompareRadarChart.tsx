import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  PolarRadiusAxis,
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

export function CompareRadarChartComponent({ chartData }: RadarChartPropsType) {
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
          style={{ width: "100%", height: "40vh" }} // 세로 크기 상대 단위로 설정
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
              // 텍스트와 그래프 사이의 거리 조정 (x축)
              dy={4} // 텍스트와 그래프 사이의 거리 조정 (y축)
              className="areaAnalysis8"
            />
            <PolarGrid />
            <PolarRadiusAxis
              domain={[0, 100]} // 반지름 축의 최소값과 최댓값을 설정
            />
            <Radar dataKey="ratio" fill="#8949ff" fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
