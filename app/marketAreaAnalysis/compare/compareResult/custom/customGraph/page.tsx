"use client";

import NavBar from "@/components/NavBar";
import { CustomGraphPart } from "@/components/CustomGraphPart";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/lib/store";
import { useAreaStore } from "@/lib/store";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";
import { useCustomFeatureStore } from "@/lib/store";

const chartData = [
  { standard: "유동 인구 수", ratio: 60 },
  { standard: "체류/방문 비율", ratio: 70 },
  { standard: "혼잡도 변화율", ratio: 60 },
  { standard: "체류시간 대비 방문자 수", ratio: 39 },
  { standard: "방문 집중도", ratio: 50 },
  { standard: "평균 체류시간 변화율", ratio: 75 },
  { standard: "커스텀 피처", ratio: 55 },
];

interface districtType {
  clusterName: string;
  districtName: string;
  customFeature: {
    name: string;
    value: number;
  };
  overallData: {
    congestion: number;
    population: number;
    stayPerVisitor: number;
    stayTimeChange: number;
    stayVisit: number;
    visitConcentration: number;
  };
  top: {
    name: string;
    value: number;
  };
}

export default function CustomGraphPage() {
  const { accessToken } = useAuthStore();
  const { featureUuid } = useCustomFeatureStore();
  const { globalAreaIdx, globalCompareAreaIdx } = useAreaStore();
  const { authFetch } = useAuthenticatedFetch();
  const [district1Data, setDistrict1Data] = useState<districtType>({
    clusterName: "",
    districtName: "",
    customFeature: {
      name: "",
      value: 0,
    },
    overallData: {
      congestion: 0,
      population: 0,
      stayPerVisitor: 0,
      stayTimeChange: 0,
      stayVisit: 0,
      visitConcentration: 0,
    },
    top: {
      name: "",
      value: 0,
    },
  });
  const [district2Data, setDistrict2Data] = useState<districtType>({
    clusterName: "",
    districtName: "",
    customFeature: {
      name: "",
      value: 0,
    },
    overallData: {
      congestion: 0,
      population: 0,
      stayPerVisitor: 0,
      stayTimeChange: 0,
      stayVisit: 0,
      visitConcentration: 0,
    },
    top: {
      name: "",
      value: 0,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await authFetch(
        `http://13.125.95.219:8080/api/customFeatures/compare/${globalAreaIdx}/${globalCompareAreaIdx}/${featureUuid}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);
      setDistrict1Data(data.district1);
      setDistrict2Data(data.district2);

      return data;
    };

    if (accessToken && featureUuid) {
      fetchData();
    }
  }, [accessToken, featureUuid]);

  return (
    <>
      <NavBar />
      <div className="flex">
        <CustomGraphPart idx={1} districtData={district1Data} />
        <CustomGraphPart idx={2} districtData={district2Data} />
      </div>
    </>
  );
}
