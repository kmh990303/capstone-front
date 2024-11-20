"use client";

import { motion } from "framer-motion";
import { Input } from "./ui/input";
import React, { useState } from "react";

interface optionType {
  feature: string;
  id: number;
}

interface calOptionType {
  name: string;
  mark: string;
  id: number;
}

const options = [
  { feature: "방문 집중도", id: 1 },
  { feature: "유동 인구 수", id: 2 },
  { feature: "체류/방문 비율", id: 3 },
  { feature: "혼잡도 변화율", id: 4 },
  { feature: "체류시간 대비 방문자 수", id: 5 },
  { feature: "평균 체류시간 변화율", id: 6 },
  { feature: "시간대별 방문자 수 증가율", id: 7 },
];

const cal_options = [
  { name: "덧셈", mark: "+", id: 1 },
  { name: "뺄셈", mark: "-", id: 2 },
  { name: "곱셈", mark: "*", id: 3 },
  { name: "나눗셈", mark: "/", id: 4 },
  { name: "나머지 연산", mark: "%", id: 5 },
  { name: "제곱 연산", mark: "**", id: 6 },
];

export const CustomPart = () => {
  // 계산식 유효성 검증은 매번 키워드 선택 시 keywords에 추가해 개수를 세야 함
  const [keywords, setKeywords] = useState<string[]>([]);
  const [optionCnt, setOptionCnt] = useState<number>(0);
  const [calOptionCnt, setCalOptionCnt] = useState<number>(0);
  
  const [showOptions, setShowOptions] = useState(false);

  const [newFeat, setNewFeat] = useState<string>("");
  const [formula, setFormula] = useState<string>("");
  const [turn, setTurn] = useState<boolean>(true);
  const [result, setResult] = useState({}); // 커스텀 피처 생성 클릭시 결과로 받는 데이터를 저장

  //   const handleKeyWordClick = (keyword: string) => {
  //     setKeywords((prev) => [...prev, keyword]);
  //     setShowOptions(false);
  //   };

  const handleFocus = () => {
    setShowOptions(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowOptions(false), 200);
  };

  const validateFormula = () => {
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const f = formula.split(" ");

    console.log(f);

    if (!validateFormula) {
      window.alert("계산식 형식이 잘못되었습니다.");
      return;
    }

    try {
      const response = await fetch("http://backend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newFeat,
          formula,
        }),
      });

      if (!response.ok) {
        throw new Error("failed to fetch data...");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFeat(e.target.value);
  };

  const handleChangeFormula = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormula(e.target.value);
  };

  const handleOptionClick = (option: optionType) => {
    setFormula((prevState) => prevState + " " + option.feature);
    setShowOptions(false);
    setTurn(false);
  };

  const handlecalOptionClick = (option: calOptionType) => {
    setFormula((prevState) => prevState + " " + option.mark);
    setShowOptions(false);
    setTurn(true);
  };

  const handleInit = () => {
    setFormula(""); // 계산식 초기화
    setTurn(true);
  };

  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col border-2 border-gray-100">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2 areaAnalysis_black">
            원하는 지표를 커스텀 해보세요.
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-7 gap-5">
          <Input
            type="text"
            name="newFeat"
            placeholder="만들고 싶은 지표명을 입력해 주세요."
            className="w-[80%] border-2 border-gray-300 mx-auto px-2 py-6 focus:border-orange-300 areaAnalysis_ptago"
            value={newFeat}
            onChange={handleChangeName}
          />
          <Input
            type="text"
            placeholder="수식을 입력해 주세요."
            className="w-[80%] border-2 border-gray-300 mx-auto px-2 py-6 focus:border-orange-300 areaAnalysis_ptago"
            onFocus={handleFocus}
            value={formula}
            onChange={handleChangeFormula}
          />
          {showOptions && turn && (
            <div className="w-[80%] mx-auto overflow-y-auto max-h-[15vh] border-2 border-gray-100">
              {options.map((option) => (
                <div
                  key={option.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer areaAnalysis_ptagl"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.feature}
                </div>
              ))}
            </div>
          )}
          {showOptions && !turn && (
            <div className="w-[80%] mx-auto overflow-y-auto max-h-[15vh] border-2 border-gray-100">
              {cal_options.map((option) => (
                <div
                  key={option.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer areaAnalysis_ptagl"
                  onClick={() => handlecalOptionClick(option)}
                >
                  {option.mark}
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between w-[80%] mx-auto gap-4">
            <motion.button
              type="button"
              onClick={handleInit}
              whileHover={{ scale: 1.1 }}
              className="areaAnalysis3_white px-5 py-5 rounded-2xl"
              style={{ backgroundColor: "#8949FF" }}
            >
              계산식 초기화
            </motion.button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              className="areaAnalysis3_white px-6 py-5 rounded-2xl"
              style={{ backgroundColor: "#fc8e3f" }}
            >
              커스텀 피처 계산 및 생성
            </motion.button>
          </div>
        </form>
      </div>
    </>
  );
};
