import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface resultPropsType {
  arrangedData1: {
    population: number;
    stayVisit: number;
    congestion: number;
    stayPerVisitor: number;
    visitConcentration: number;
    stayTimeChange: number;
  };
  arrangedData2: {
    population: number;
    stayVisit: number;
    congestion: number;
    stayPerVisitor: number;
    visitConcentration: number;
    stayTimeChange: number;
  };
  differenceData: {
    key1: {
      name: string;
      value1: number;
      value2: number;
    };
    key2: {
      name: string;
      value1: number;
      value2: number;
    };
    key3: {
      name: string;
      value1: number;
      value2: number;
    };
  };
  name: string;
  compareName: string;
}

export const CompareResultPart = ({
  arrangedData1,
  arrangedData2,
  compareName,
  name,
  differenceData,
}: resultPropsType) => {
  const router = useRouter();

  const handleCustomButton = () => {
    router.push("/marketAreaAnalysis/compare/compareResult/custom");
  };

  const handleImproveButton = () => {
    router.push("/marketAreaAnalysis/compare/compareResult/improve");
  };

  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2 areaAnalysis_black">
            <span className="areaAnalysis">{name}</span> vs
            <span className="areaAnalysis_purple">{compareName}</span>
          </h1>
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="areaAnalysis3 ml-8">주요 특징 비교</div>
          <div>
            <motion.button
              className="areaAnalysis3_white px-10 py-5 rounded-2xl ml-11"
              style={{ backgroundColor: "#8949FF" }}
              whileHover={{ scale: 1.1 }}
              onClick={handleImproveButton}
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
                  {name}
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
                  {compareName}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData1.population}
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
                  {arrangedData2.population}
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData1.stayVisit}
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
                  {arrangedData2.stayVisit}
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData1.congestion}
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
                  {arrangedData2.congestion}
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData1.stayPerVisitor}
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
                  {arrangedData2.stayPerVisitor}
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData1.visitConcentration}
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
                  {arrangedData2.visitConcentration}
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData1.stayTimeChange}
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_centerbold border border-gray-300"
                >
                  체류시간 변화율
                </td>
                <td
                  align="center"
                  className="py-2 areaAnalysis8_center border border-gray-300"
                >
                  {arrangedData2.stayTimeChange}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-[90%] mx-auto flex flex-col mt-6">
          <div>
            <p className="areaAnaysis_ptagb">
              <span className="areaAnalysis_ptag">{name}</span> 상권과{" "}
              <span className="areaAnalysis_ptagp">{compareName}</span> 상권의
              주요 특징 비교는 다음과 같습니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">1. {differenceData.key1.name}</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              {name} 상권의 {differenceData.key1.name}는{" "}
              {differenceData.key1.value1}이며, {compareName} 상권의{" "}
              {differenceData.key1.name}는 {differenceData.key1.value2}입니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">2. {differenceData.key2.name}</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              {name} 상권의 {differenceData.key2.name}은{" "}
              {differenceData.key2.value1}이며, {compareName} 상권의{" "}
              {differenceData.key2.name}는 {differenceData.key2.value2}입니다.
            </p>
          </div>
          <div className="mt-3">
            <p className="areaAnalysis_smallp">3. {differenceData.key3.name}</p>
            <p className="flex items-center gap-1 areaAnalysis_xsmallp">
              <span>
                <LuDot />
              </span>
              {name} 상권의 {differenceData.key3.name}은{" "}
              {differenceData.key3.value1}이며, {compareName} 상권의{" "}
              {differenceData.key3.name}는 {differenceData.key3.value2}입니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
