"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart with a legend";

const chartData = [
  { feature: "feature1", Area1: 186, Area2: 80 },
  { feature: "feature2", Area1: 305, Area2: 200 },
  { feature: "feature3", Area1: 237, Area2: 120 },
  { feature: "feature4", Area1: 73, Area2: 190 },
  { feature: "feature5", Area1: 209, Area2: 130 },
  { feature: "feature6", Area1: 214, Area2: 140 },
];

const chartConfig = {
  Area1: {
    label: "Area1",
    color: "#DD5C48",
  },
  Area2: {
    label: "Area2",
    color: "#407EFF",
  },
} satisfies ChartConfig;

export function RadarChartComponent() {
  return (
    <Card className="border-none mt-4">
      <CardContent>
        <ChartContainer config={chartConfig} className="mx-auto h-[35vh]">
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -30,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis
              dataKey="feature"
              tick={{ fontSize: 15, width: 80 }}
              tickSize={10}
              dy={5}
            />
            <PolarGrid />
            <Radar dataKey="Area1" fill="red" fillOpacity={0.3} />
            <Radar dataKey="Area2" fill="blue" fillOpacity={0.3} />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
