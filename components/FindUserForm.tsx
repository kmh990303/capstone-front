"use client";

import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import ModalLogo from "@/images/ModalLogo2.png"; // Update this path if necessary
import lockImage from "@/images/lock2.png";
import emailImage from "@/images/email.png";
import { MoonLoader } from "react-spinners";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface findInfoType {
  eName: string;
  pName: string;
  pEmail: string;
}

export function FindUserForm() {
  const [findInfo, setFindInfo] = useState<findInfoType>({
    eName: "",
    pName: "",
    pEmail: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFindInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitFindEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://backEnd/findEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: findInfo.eName,
        }),
      });

      if (!response.ok) {
        throw new Error("[ERROR] 데이터 페칭에 실패했습니다.");
      }

      const data = await response.json();
      window.alert(`회원님의 이메일은 ${data} 입니다.`);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : "알 수 없는 에러";
      setError("이메일 찾기 실패: " + errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitFindPassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    // setIsLoading(true);
    // setError(null);
    setIsDialogOpen(true);

    // try {
    //   const response = await fetch("http://backEnd/findPassword", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: findInfo.pName,
    //       email: findInfo.pEmail,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error("[ERROR] 데이터 페칭에 실패했습니다.");
    //   }

    //   const data = await response.json();
    //   window.alert(`회원님의 비밀번호는 ${data} 입니다.`);
    // } catch (e) {
    //   const errorMessage = e instanceof Error ? e.message : "알 수 없는 에러";
    //   setError("비밀번호 찾기 실패: " + errorMessage);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.alert("비밀번호가 성공적으로 재설정되었습니다!");
    setIsDialogOpen(false);
  };

  return (
    <motion.div
      className="w-[35rem] h-[35rem] mx-auto bg-white shadow-xl rounded-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <CardHeader />
      <CardContent>
        <form onSubmit={handleSubmitFindEmail}>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <MdInfoOutline
                  style={{ color: "#FC8E3F", fontSize: "2rem" }}
                  className="w-7 ml-1 translate-x-1"
                />
              </div>
              <input
                id="eName"
                type="text"
                name="eName"
                placeholder="이름 입력"
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm"
                value={findInfo.eName}
                onChange={handleChange}
              />
            </div>
            <CardFooter className="flex flex-col justify-center items-center m-2 px-2">
              <button
                type="submit"
                className="loginButton rounded-lg w-full text-white py-4 flex justify-center items-center"
                disabled={isLoading}
                style={{
                  backgroundColor: isLoading ? "#6536BF" : "#8949FF",
                  opacity: isLoading ? 0.4 : 1,
                }}
              >
                {isLoading ? (
                  <MoonLoader color="#FFFFFF" size={20} />
                ) : (
                  "이메일 찾기"
                )}
              </button>
            </CardFooter>
          </div>
        </form>

        <form onSubmit={handleSubmitFindPassword} className="mt-12">
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <MdInfoOutline
                  style={{ color: "#FC8E3F", fontSize: "2rem" }}
                  className="w-7 ml-1 translate-x-1"
                />
              </div>
              <input
                id="pName"
                type="text"
                name="pName"
                placeholder="이름 입력"
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm"
                value={findInfo.pName}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <Image src={emailImage} alt="emailImage" className="w-7 ml-2" />
              </div>
              <input
                id="pEmail"
                type="email"
                name="pEmail"
                placeholder="이메일 주소 입력"
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm"
                value={findInfo.pEmail}
                onChange={handleChange}
              />
            </div>
            <CardFooter className="flex flex-col justify-center items-center m-2 px-2">
              <button
                type="submit"
                className="loginButton rounded-lg w-full text-white py-4 flex justify-center items-center"
                disabled={isLoading}
                style={{
                  backgroundColor: isLoading ? "#6536BF" : "#8949FF",
                  opacity: isLoading ? 0.4 : 1,
                }}
              >
                {isLoading ? (
                  <MoonLoader color="#FFFFFF" size={20} />
                ) : (
                  "비밀번호 찾기"
                )}
              </button>
            </CardFooter>
          </div>
        </form>
      </CardContent>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="mb-2">비밀번호 재설정</DialogTitle>
            <DialogDescription>
              새 비밀번호를 입력하고 확인란에 동일하게 입력하세요.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleResetPassword}>
            <div className="grid gap-4 py-4">
              <input
                type="password"
                placeholder="새 비밀번호"
                className="input-text outline-none h-12 border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm"
              />
              <input
                type="password"
                placeholder="비밀번호 확인"
                className="input-text outline-none h-12 border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm"
              />
            </div>
            <DialogFooter>
              <button
                type="submit"
                className="loginButton rounded-lg w-full text-white py-4"
                style={{ backgroundColor: "#8949FF" }}
              >
                재설정 완료
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
