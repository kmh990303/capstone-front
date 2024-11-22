"use client";

import NavBar from "@/components/NavBar";
import { ImprovePart } from "@/components/ImprovePart";
import { ImproveCarousel } from "@/components/ImproveCarousel";

export default function ImprovePage() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[58%] h-[90vh] overflow-y-auto">
          <div className="w-full h-[10vh] border-2 border-gray-100 flex flex-col justify-center items-center">
            <h1 className="flex items-center gap-2 areaAnalysis_black">
              로컬렌즈에서 제시하는 개선 방안입니다.
            </h1>
          </div>
          <div className="w-full mx-auto flex justify-between items-center">
            <ImproveCarousel />
            <div className="flex flex-col areaAnalysis_ptaglw translate-y-3 py-24 px-6 max-w-[20vw] mr-10 border-2 border-gray-100 shadow-lg transform transition-transform hover:scale-110">
              <p className="flex flex-col gap-1 mb-2">
                지역{" "}
                <span className="mb-2 areaAnalysis_ptagl">잠실 한강공원</span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                기간{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  2024년 4월 27일 ~ 6월 1일
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                성격
                <span className="mb-2 areaAnalysis_ptagl">
                  한강 주변 상권의 유동 인구를 대규모로 유치하며, 첨단 기술과
                  문화 콘텐츠를 결합한 이벤트로서 해당 지역의 관광 매력도와 소비
                  활성화를 촉진하는 핵심 요소로 작용함
                </span>
              </p>
            </div>
          </div>
        </div>
        <ImprovePart />
      </div>
    </>
  );
}
