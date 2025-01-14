"use client";

import { motion } from "framer-motion";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import ModalLogo from "@/images/ModalLogo2.png";

import { MoonLoader } from "react-spinners";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { DatePicker } from "./DatePicker";

import { useAreaStore } from "@/lib/store";

const PREV_MESSAGE = "이전 날짜를 선택해주세요.";
const NEXT_MESSAGE = "이후 날짜를 선택해주세요.";

export function DateCompareForm() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);
  const { setPrevDate, setCurDate } = useAreaStore();

  const [prevDate, setPrevDateData] = useState<Date | undefined>();
  const [curDate, setCurDateData] = useState<Date | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    // setError(null);

    if (prevDate) setPrevDate(prevDate);
    if (curDate) setCurDate(curDate);

    // setIsLoading(false);

    // try {
    //   //   const response = await fetch("http://backEnd-api/getAreaData", {
    //   //     method: "GET",
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //     },
    //   //     body: JSON.stringify({
    //   //       selectedArea,
    //   //     }),
    //   //   });
    //   //   if (!response.ok) {
    //   //     throw new Error("[ERROR] 데이터 페칭에 실패했습니다.");
    //   //   }
    //   //   const data = await response.json();
    //   //   return data;
    // } catch (error) {
    //   throw new Error("[ERROR] 데이터 페칭에 실패했습니다.");
    // } finally {
    //   setIsLoading(false);
    // }

    router.push("/marketAreaAnalysis/dateCompare/result");
  };

  return (
    <motion.div
      className="w-[35rem] h-[35rem] mx-auto bg-white shadow-xl rounded-md"
      initial={{ opacity: 0, y: 50 }} // 초기 상태
      animate={{ opacity: 1, y: 0 }} // 애니메이션 중 상태
      exit={{ opacity: 0, y: 50 }} // 종료 상태
      transition={{ duration: 0.5 }} // 애니메이션 지속 시간
    >
      <CardHeader className="mt-5">
        <CardTitle>
          <Image src={ModalLogo} alt="logo" className="w-20rem mx-auto m-1" />
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col">
              {!isLoading && (
                <>
                  <h1 className="my-text3 mx-4 my-2">
                    비교할 날짜를 선택해주세요.
                  </h1>
                </>
              )}
              {isLoading && (
                <>
                  <h1 className="my-text3 mx-4 my-2">결과 분석 중입니다!</h1>
                  <h4 className="my-text4 mx-4 my-2">잠시만 기다려주세요.</h4>
                </>
              )}
            </div>
            {!isLoading && (
              <>
                <div className="flex justify-center gap-2 w-[30rem] h-14 items-center rounded-md m-1 mx-auto mt-3">
                  <DatePicker
                    setDateData={setPrevDateData}
                    caption={PREV_MESSAGE}
                  />
                  <DatePicker
                    setDateData={setCurDateData}
                    caption={NEXT_MESSAGE}
                  />
                </div>

                <CardFooter className="flex justify-end items-center m-2 px-2">
                  <motion.button
                    type="submit"
                    style={{
                      backgroundColor: "#8949FF",
                      //   backgroundColor: validateSubmit ? "#6536BF" : "#8949FF",
                      //   opacity: validateSubmit ? 0.4 : 1,
                    }}
                    className="loginButton rounded-lg w-20 text-white py-2 flex justify-center items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    Next
                  </motion.button>
                </CardFooter>
              </>
            )}
            {isLoading && (
              <div className="ml-3">
                <MoonLoader
                  color="#8949FF"
                  size={110}
                  className="mx-auto mt-6"
                />
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </motion.div>
  );
}
