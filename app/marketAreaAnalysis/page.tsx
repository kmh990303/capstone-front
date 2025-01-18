// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import MapComponent from "@/components/MapComponent";
import { AreaAnalysisPart } from "@/components/AreaAnalysisPart";
import { useAreaStore } from "@/lib/store";
import { dummyAreas } from "@/dummy/dummy";
import { useEffect, useState } from "react";

interface districtInfoType {
  districtName: string;
  clusterName: string;
  latitude: number;
  longitude: number;
}

interface OverallDataType {
  population: number;
  stayVisit: number;
  congestion: number;
  stayPerVisitor: number;
  visitConcentration: number;
  stayTimeChange: number;
}

interface TopTwoDataType {
  first: {
    name: string;
    value: number;
  };
  second: {
    name: string;
    value: number;
  };
}

export default function MarketAreaAnalysisPage() {
  const name = useAreaStore((state) => state.name);
  const setGlobalAreaIdx = useAreaStore((state) => state.setGlobalAreaIdx);
  const [districtData, setDistrictData] = useState<districtInfoType>({
    districtName: "",
    clusterName: "",
    latitude: 0,
    longitude: 0,
  });

  const [overallData, setOverallData] = useState<OverallDataType>({
    population: 0,
    stayVisit: 0,
    congestion: 0,
    stayPerVisitor: 0,
    visitConcentration: 0,
    stayTimeChange: 0,
  });

  const [topTwoData, setTopTwoData] = useState<TopTwoDataType>({
    first: {
      name: "",
      value: 0,
    },
    second: {
      name: "",
      value: 0,
    },
  });

  const [areaIdx, setAreaIdx] = useState<number>(0);

  useEffect(() => {
    const rehydrate = useAreaStore.persist.hasHydrated();
    if (!rehydrate || !name) {
      console.log("State not hydrated or name is null, skipping fetch.");
      return;
    }

    const idx = dummyAreas.indexOf(name);
    setAreaIdx(idx);
    setGlobalAreaIdx(idx);
    if (idx === -1) {
      console.error("Invalid area name:", name);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://3.228.160.217:8080/api/main/${idx}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) throw new Error("Failed to fetch data...");

        const data = await response.json();
        console.log(data);

        setDistrictData(data.districtInfo);
        setOverallData(data.overallData);
        setTopTwoData(data.topTwo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <NavBar />
      <div className="flex">
        <MapComponent
          latitude={districtData.latitude}
          longitude={districtData.longitude}
        />
        <AreaAnalysisPart
          clusterName={districtData.clusterName}
          districtName={districtData.districtName}
          first={topTwoData.first.name}
          firstValue={topTwoData.first.value}
          second={topTwoData.second.name}
          overallData={overallData}
          idx={areaIdx}
        />
      </div>
    </>
  );
}
