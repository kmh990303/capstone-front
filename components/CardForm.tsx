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
import lockImage from "@/images/lock2.png";
import emailImage from "@/images/email.png";

import { MoonLoader } from "react-spinners";

import { useAuth } from "@/api/useAuth";
import { useState } from "react";

interface userInput {
  email: string;
  password: string;
}

export function CardForm() {
  const { login, logout } = useAuth();
  const [userInfo, setUserInfo] = useState<userInput>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInfo);
    setIsLoading(true);
    setError(null);

    try {
      const data = await login(userInfo.email, userInfo.password);
      console.log(data);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "알 수 없는 에러";
      setError("로그인 실패: " + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <motion.div
      className="w-[35rem] h-[35rem] mx-auto bg-white shadow-xl rounded-md"
      initial={{ opacity: 0, y: 50 }} // 초기 상태
      animate={{ opacity: 1, y: 0 }} // 애니메이션 중 상태
      exit={{ opacity: 0, y: 50 }} // 종료 상태
      transition={{ duration: 0.5 }} // 애니메이션 지속 시간
    >
      <CardHeader>
        <CardTitle>
          <Image src={ModalLogo} alt="logo" className="w-20rem mx-auto m-1" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col">
              <h2 className="my-text mx-4 my-2">안녕하세요! 🙌</h2>
              <h4 className="my-text2 mx-4 my-2">
                로컬렌즈를 찾아주셔서 감사합니다.
              </h4>
            </div>
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <Image src={emailImage} alt="emailImage" className="w-7 ml-2" />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해 주세요."
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <Image src={lockImage} alt="lockImage" className="w-7 ml-2" />
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호를 입력해 주세요."
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                value={userInfo.password}
                onChange={handleChange}
              />
            </div>
            <CardFooter className="flex flex-col justify-center items-center m-2 px-2">
              <motion.button
                type="submit"
                style={{
                  backgroundColor: isLoading ? "#6536BF" : "#8949FF",
                  opacity: isLoading ? 0.8 : 1,
                }}
                className="loginButton rounded-lg w-full text-white py-4 flex justify-center items-center"
                whileHover={{ scale: 1.05 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <MoonLoader color="#FFFFFF" size={20} />
                ) : (
                  "로그인"
                )}
              </motion.button>
              <div className="flex justify-between w-full px-2 mt-4">
                <motion.button
                  className="smallButton"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    opacity: isLoading ? 0.5 : 1,
                  }}
                  disabled={isLoading}
                >
                  회원가입
                </motion.button>
                <motion.button
                  className="smallButton"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    opacity: isLoading ? 0.5 : 1,
                  }}
                  disabled={isLoading}
                >
                  아이디 &middot; 비밀번호 찾기
                </motion.button>
              </div>
            </CardFooter>
          </div>
        </form>
      </CardContent>
    </motion.div>
  );
}
