import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    naver: any;
  }
}

const MapComponent: React.FC = () => {
  const initializeMap = () => {
    if (window.naver) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.549186395087, 127.07505567644),
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
    if (typeof window !== "undefined" && window.naver) {
      initializeMap();
    }
  }, []);

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
