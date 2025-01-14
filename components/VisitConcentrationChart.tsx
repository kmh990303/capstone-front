import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts";
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

// 원본 데이터 (변화율로 교체된 데이터)
const chartDataWithRatio = [
  { hour: "0시", ratio: 0 },
  { hour: "1시", ratio: -20 },
  { hour: "2시", ratio: -25 },
  { hour: "3시", ratio: -33.33 },
  { hour: "4시", ratio: -25 },
  { hour: "5시", ratio: 60 },
  { hour: "6시", ratio: 140 },
  { hour: "7시", ratio: 100 },
  { hour: "8시", ratio: 66.67 },
  { hour: "9시", ratio: 25 },
  { hour: "10시", ratio: 20 },
  { hour: "11시", ratio: 6.67 },
  { hour: "12시", ratio: 25 },
  { hour: "13시", ratio: -2.5 },
  { hour: "14시", ratio: -10.26 },
  { hour: "15시", ratio: -2.86 },
  { hour: "16시", ratio: 5.88 },
  { hour: "17시", ratio: 5.56 },
  { hour: "18시", ratio: 5.26 },
  { hour: "19시", ratio: 5 },
  { hour: "20시", ratio: -9.52 },
  { hour: "21시", ratio: -11.76 },
  { hour: "22시", ratio: -17.65 },
  { hour: "23시", ratio: -28.57 },
];

const chartConfig = {
  ratio: {
    label: "Change Ratio",
    color: "#FC8E3F",
  },
} satisfies ChartConfig;

export function VisitConcentrationChart() {
  return (
    <Card className="mt-7 w-full transform transition-transform hover:scale-110">
      <CardHeader>
        <CardTitle className="areaAnalysis5">시간대별 방문 집중도</CardTitle>
      </CardHeader>
      <CardContent className="relative w-full">
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartDataWithRatio}
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
                  }
                  hideLabel
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
          시간대별 방문 집중도 추이입니다.
        </div>
      </CardFooter>
    </Card>
  );
}
