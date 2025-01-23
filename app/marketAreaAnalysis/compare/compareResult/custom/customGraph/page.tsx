"use client";

import NavBar from "@/components/NavBar";
import CustomGraphPart from "@/components/CustomGraphPart";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/lib/store";
import { useAreaStore } from "@/lib/store";
import { useAuthenticatedFetch } from "@/hooks/useAuthenticatedFetch";
import { useCustomFeatureStore } from "@/lib/store";

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
        `https://localens.duckdns.org/api/customFeatures/compare/${globalAreaIdx}/${globalCompareAreaIdx}/${featureUuid}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data...");

      const data = await response.json();
      console.log(data);
      setDistrict1Data(data.data.district1);
      setDistrict2Data(data.data.district2);

      return data;
    };

    if (accessToken && featureUuid) {
      fetchData();
    }
  }, [accessToken, featureUuid, globalAreaIdx, globalCompareAreaIdx]);

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
