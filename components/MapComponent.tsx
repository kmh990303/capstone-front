import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    naver: any;
  }
}

interface areaPropsType {
  latitude: number;
  longitude: number;
}

const MapComponent = ({ latitude, longitude }: areaPropsType) => {
  const initializeMap = () => {
    if (window.naver) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom: 15,
      };
      const map = new window.naver.maps.Map("map", mapOptions); // 지도 생성

      // 마커 생성
      const marker = new window.naver.maps.Marker({
        position: mapOptions.center, // 마커 위치는 지도 중앙
        map: map, // 마커를 추가할 지도
      });

      console.log("Map initialized and marker added");
    } else {
      console.error("Naver Maps not loaded");
    }
  };

  useEffect(() => {
    // 지도 로딩이 완료되면 initializeMap 호출
    if (
      typeof window !== "undefined" &&
      window.naver &&
      latitude !== 0 &&
      longitude !== 0
    ) {
      initializeMap();
    }
  }, [latitude, longitude]); // latitude, longitude 변경 시마다 실행 -> useEffect에 의존성 배열을 작성해놓는게 핵심

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_KEY}`}
        strategy="afterInteractive"
        type="text/javascript"
        onLoad={() => {
          console.log("Naver Map script loaded successfully");
          initializeMap();
        }}
      />
      <div id="map" className="w-[58%] h-[90vh]" />{" "}
    </>
  );
};

export default MapComponent;
