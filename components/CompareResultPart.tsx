import { RadarChartComponent } from "./RadarChart";
import Image from "next/image";
import personLogo from "@/images/person.png";

import { LuDot } from "react-icons/lu";

import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

export const CompareResultPart = () => {
  const router = useRouter();

  const handleCustomButton = () => {
    router.push("/marketAreaAnalysis/compare/custom");
  };

  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2 areaAnalysis_black">
            <span className="areaAnalysis">세종대</span> vs
            <span className="areaAnalysis_purple">이태원</span>
          </h1>
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="areaAnalysis3 ml-8">주요 특징 비교</div>
          <div>
            <motion.button
              className="areaAnalysis3_white px-10 py-5 rounded-2xl ml-11"
              style={{ backgroundColor: "#8949FF" }}
              whileHover={{ scale: 1.1 }}
            >
              개선 방향 제시
            </motion.button>
          </div>
          <div>
            <motion.button
              className="areaAnalysis3_white px-10 py-5 rounded-2xl mr-8"
              style={{ backgroundColor: "#fc8e3f" }}
              whileHover={{ scale: 1.1 }}
              onClick={handleCustomButton}
            >
              커스텀 지표 계산
            </motion.button>
          </div>
        </div>

        <div className="w-[90%] border-2 border-gray-100 mx-auto">
          <table
            border={1}
            className="w-full table-fixed border-collapse border border-gray-300"
          >
            <thead>
              <tr>
                <th
                  align="center"
                  style={{ backgroundColor: "#FFE9D9", width: "33.33%" }}
                  className="py-3 areaAnalysis5_center border border-gray-300"
                >
                  세종대
                </th>
                <th
                  align="center"
                  style={{ backgroundColor: "#F3F4F6", width: "33.33%" }}
                  className="py-3 areaAnalysis5_centerb border border-gray-300"
                >
                  특징
                </th>
                <th
                  align="center"
                  style={{ backgroundColor: "#EBE0FF", width: "33.33%" }}
                  className="py-3 areaAnalysis5_centerp border border-gray-300"
                >
                  이태원
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  20
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_centerbold border border-gray-300"
                >
                  유동 인구 수
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  70
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  30
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_centerbold border border-gray-300"
                >
                  체류 방문 비율
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  50
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  60
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_centerbold border border-gray-300"
                >
                  혼잡도 변화율
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  70
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  50
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_centerbold border border-gray-300"
                >
                  체류시간 대비 방문자 수
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  70
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  40
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_centerbold border border-gray-300"
                >
                  방문 집중도
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  50
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[90%] mx-auto flex flex-col mt-6">
          <div>
            <p className="areaAnaysis_ptagb">
              <span className="areaAnalysis_ptag">세종대</span> 상권과{" "}
              <span className="areaAnalysis_ptagp">이태원</span> 상권의 주요
              특징 비교는 다음과 같습니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">1. 유동 인구 수</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              세종대 상권의 유동 인구 수는 70이며, 이태원 상권의 유동 인구 수는
              90입니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">2. 체류/방문 비율</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              세종대 상권의 체류/방문 비율은 30이며, 이태원 상권의 유동 인구
              수는 60입니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">3. 방문 집중도</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              세종대 상권의 방문 집중도는 70이며, 이태원 상권의 방문 집중도는
              90입니다.
            </p>
          </div>
          {/* <div className="mt-3">
            <p className="areaAnalysis_smallp">4. 혼잡도 변화율</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              세종대 상권의 혼잡도 변화율는 70이며, 이태원 상권의 혼잡도
              변화율는 90입니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">5. 평균 체류시간 변화율</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              세종대 상권의 평균 체류시간 변화율은 70이며, 이태원 상권의 평균
              체류시간 변화율은 90입니다.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};
