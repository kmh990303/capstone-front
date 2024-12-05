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

// `standard` 값과 그에 대응되는 한글 매핑 객체 정의
const standardNameMapping: Record<string, string> = {
  population: "유동 인구 수",
  stayVisit: "체류/방문 비율",
  congestion: "혼잡도 변화율",
  stayPerVisitor: "체류시간 대비 방문자 수",
  visitConcentration: "방문 집중도",
  stayTimeChange: "평균 체류시간 변화율",
};

interface CustomRadarChartPropsType {
  chartData: {
    standard: string;
    ratio: number;
  }[];
  color: string;
}

const chartConfig = {
  standard: {
    label: "standard",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function CustomCompareChartComponent({
  chartData,
  color,
}: CustomRadarChartPropsType) {
  const mappedChartData = chartData.map((item) => ({
    ...item,
    standard: standardNameMapping[item.standard] || item.standard, 
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
            data={mappedChartData} // 매핑된 데이터 사용
            style={{ width: "100%", height: "100%" }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis
              dataKey="standard" // 한글로 매핑된 'standard' 값 사용
              tickSize={15}
              tick={{ fontSize: 14, fill: "black" }}
              dy={4}
              className="areaAnalysis8"
            />
            <PolarGrid />
            <PolarRadiusAxis
              domain={[0, 100]} // 반지름 축의 최소값과 최댓값 설정
              axisLine={false} // 반지름 축 라인 제거
            />
            <Radar dataKey="ratio" fill={color} fillOpacity={0.6} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
