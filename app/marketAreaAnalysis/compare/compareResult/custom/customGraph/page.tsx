"use client";

import NavBar from "@/components/NavBar";
import { CustomGraphPart } from "@/components/CustomGraphPart";
import { useEffect } from "react";
import { useAuthStore } from "@/lib/store";
import { useAreaStore } from "@/lib/store";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";

const chartData = [
  { standard: "유동 인구 수", ratio: 60 },
  { standard: "체류/방문 비율", ratio: 70 },
  { standard: "혼잡도 변화율", ratio: 60 },
  { standard: "체류시간 대비 방문자 수", ratio: 39 },
  { standard: "방문 집중도", ratio: 50 },
  { standard: "평균 체류시간 변화율", ratio: 75 },
  { standard: "커스텀 피처", ratio: 55 },
];

export default function CustomGraphPage() {
  const { accessToken } = useAuthStore();
  const { globalAreaIdx, globalCompareAreaIdx } = useAreaStore();
  const { authFetch } = useAuthenticatedFetch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await authFetch(
        `http://13.125.95.219:8080/api/customFeatures/compare/${globalAreaIdx}/${globalCompareAreaIdx}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);

      return data;
    };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <>
      <NavBar />
      <div className="flex">
        <CustomGraphPart idx={1} chartData={chartData} />
        <CustomGraphPart idx={2} chartData={chartData} />
      </div>
    </>
  );
}
