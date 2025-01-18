"use client";

import NavBar from "@/components/NavBar";
import { ImprovePart } from "@/components/ImprovePart";
import { ImproveCarousel } from "@/components/ImproveCarousel";
import { useEffect, useState } from "react";

interface ImproveDataType {
  ImproveMethod: {
    image: string;
    name: string;
    date: string;
    area: string;
    detail: string;
    uuid: string;
  }[];
  beforeAndAfter: {
    before: {
      overallData: {
        population: number;
        stayVisit: number;
        congestion: number;
        stayPerVisitor: number;
        visitConcentration: number;
        stayTimeChange: number;
      }[];
      date: string[];
    };
    after: {
      overallData: {
        population: number;
        stayVisit: number;
        congestion: number;
        stayPerVisitor: number;
        visitConcentration: number;
        stayTimeChange: number;
      }[];
      date: string[];
    };
    changedFeature: {
      name: string[];
      value: number[];
    };
  };
}

export default function ImprovePage() {
  const [improveData, setImproveData] = useState<ImproveDataType>({
    ImproveMethod: [
      {
        image: "",
        name: "",
        date: "",
        area: "",
        detail: "",
        uuid: "",
      },
    ],
    beforeAndAfter: {
      before: {
        overallData: [
          {
            population: 0,
            stayVisit: 0,
            congestion: 0,
            stayPerVisitor: 0,
            visitConcentration: 0,
            stayTimeChange: 0,
          },
        ],
        date: [""],
      },
      after: {
        overallData: [
          {
            population: 0,
            stayVisit: 0,
            congestion: 0,
            stayPerVisitor: 0,
            visitConcentration: 0,
            stayTimeChange: 0,
          },
        ],
        date: [""],
      },
      changedFeature: {
        name: [""],
        value: [0],
      },
    },
  });
  const [selectedImproveIndex, setSelectedImproveIndex] = useState(0);

  useEffect(() => {
    // 더미 데이터 설정 => api 엔드포인트 수정 필요
    setImproveData({
      ImproveMethod: [
        {
          date: "2024-01-01 ~ 2024-01-09",
          area: "종로",
          image:
            "https://localens-image.s3.ap-northeast-2.amazonaws.com/jongnoInwangMountainSunriseFestival.jpg",
          name: "종로구 인왕산 해맞이 축제",
          detail: "인왕산에서 새해 맞이 행사",
          uuid: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
        },
        {
          date: "2023-10-05 ~ 2023-10-20",
          area: "여의도 한강공원",
          image:
            "https://localens-image.s3.ap-northeast-2.amazonaws.com/seoulLanternAndGwanghwamunMarket.jpg",
          name: "서울세계불꽃축제",
          detail:
            '서울세계불꽃축제는 바쁜 매일을 살아가는 시민의 일상에 즐거움을 선사하기 위해 한화그룹에서 2000년부터 사회공헌 사업으로 꾸준히 진행해 온 축제이다. 매년 세계적인 수준의 불꽃 전문 기업들이 초청되어 여의도의 밤 하늘을 무대로 환상적인 불꽃 연출을 선보이며, 주간에도 다채로운 부대행사가 진행된다. (주)한화가 자랑하는 "멀티미디어 불꽃쇼"는 불꽃과 음악, 레이저 연출이 결합된 아시아 최고 수준의 불꽃쇼이다.',
          uuid: "550e8400-e29b-41d4-a716-446655440000",
        },
        {
          date: "2024-03-27 ~ 2024-04-10",
          area: "송파나루공원(석촌호수)",
          image:
            "https://localens-image.s3.ap-northeast-2.amazonaws.com/lakeCherryBlossomFestival.jpg",
          name: "호수벚꽃축제",
          detail:
            "아름다운 봄, 벚꽃이야기 호수벚꽃축제는 송파구 석촌호수에 핀 벚꽃과 다채로운 공연을 함께 즐길 수 있는 축제이다. 27일(수) 18시 동호 중앙무대에서 벚꽃맞이 공연을 시작으로 3일간 구립예술단체 공연과 청년 버스킹 공연이 열리고 31일(일) 17시30분에 벚꽃이 활짝 핀 것을 축하하는 벚꽃만개콘서트가 개최된다. 또한 5개 체험 프로그램과 벚꽃을 주제로 한 소품들을 판매하는 프리마켓 17개 부스가 축제기간 내내 상설 운영된다.",
          uuid: "550e8400-e29b-41d4-a716-446655440001",
        },
      ],

      beforeAndAfter: {
        changedFeature: {
          name: ["체류 방문 비율", "유동인구 수", "체류시간별 방문자 수"],
          value: [26, 32, 38],
        },
        before: {
          date: ["2024년 03월", "2023년 12월", "2023년 10월"],
          overallData: [
            {
              stayTimeChange: 30,
              stayPerVisitor: 13,
              visitConcentration: 27,
              stayVisit: 35,
              congestion: 10,
              population: 30,
            },
            {
              stayTimeChange: 35,
              stayPerVisitor: 16,
              visitConcentration: 34,
              stayVisit: 40,
              congestion: 20,
              population: 40,
            },
            {
              stayTimeChange: 40,
              stayPerVisitor: 19,
              visitConcentration: 41,
              stayVisit: 45,
              congestion: 30,
              population: 50,
            },
          ],
        },
        after: {
          date: ["2024년 04월", "2024년 01월", "2023년 10월"],
          overallData: [
            {
              stayTimeChange: 42,
              stayPerVisitor: 12,
              visitConcentration: 38,
              stayVisit: 50,
              congestion: 25,
              population: 45,
            },
            {
              stayTimeChange: 49,
              stayPerVisitor: 14,
              visitConcentration: 46,
              stayVisit: 60,
              congestion: 30,
              population: 60,
            },
            {
              stayTimeChange: 56,
              stayPerVisitor: 16,
              visitConcentration: 54,
              stayVisit: 70,
              congestion: 35,
              population: 75,
            },
          ],
        },
      },
    });
  }, []); // 빈 배열은 이 useEffect가 컴포넌트 마운트 시 한 번만 실행되도록 보장

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
            <ImproveCarousel
              improveMethod={improveData.ImproveMethod}
              setSelectedImproveIndex={setSelectedImproveIndex}
            />
            <div className="flex flex-col areaAnalysis_ptaglw translate-y-3 py-24 px-6 max-w-[20vw] mr-10 mt-6 border-2 border-gray-100 shadow-lg">
              <p className="flex flex-col gap-1 mb-2">
                지역{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.ImproveMethod[selectedImproveIndex]?.area}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                기간{" "}
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.ImproveMethod[selectedImproveIndex]?.date}
                </span>
              </p>
              <p className="flex flex-col gap-1 mb-2">
                성격
                <span className="mb-2 areaAnalysis_ptagl">
                  {improveData.ImproveMethod[selectedImproveIndex]?.detail}
                </span>
              </p>
            </div>
          </div>
        </div>

        <ImprovePart
          before={improveData.beforeAndAfter.before}
          after={improveData.beforeAndAfter.after}
          changedFeature={improveData.beforeAndAfter.changedFeature}
          selectedImproveIndex={selectedImproveIndex}
        />
      </div>
    </>
  );
}
