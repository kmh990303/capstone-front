"use client";

import { MdInfoOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";

import Image from "next/image";
import lockImage from "@/images/lock2.png";
import emailImage from "@/images/email.png";

import { MoonLoader } from "react-spinners";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface userInput {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export function SignUpForm() {
  const [userInfo, setUserInfo] = useState<userInput>({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const router = useRouter();
  const validateSubmit = isLoading || !isValidEmail || !isValidPassword;

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // setError(null);

    if (userInfo.password !== userInfo.rePassword) {
      window.alert("두 번의 패스워드 입력이 일치하지 않습니다.");
      setIsLoading(false);
      return;
    }

    if (!isValidEmail) {
      window.alert("이메일이 유효하지 않습니다.");
      setIsLoading(false);
      return;
    }

    if (!isValidPassword) {
      window.alert(
        "패스워드는 영문, 숫자, 기호를 조합해 8자리 이상 입력해주세요."
      );
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://3.228.160.217:8080/api/member/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            passwordCheck: userInfo.rePassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("[ERROR] 데이터 페칭에 실패했습니다.");
      }

      const data = await response.json();
      console.log(data);
      window.alert("회원가입에 성공했습니다!");
      router.push("/");

      return data;
    } catch (e) {
      console.error(e);
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

    if (name === "email") {
      setIsValidEmail(validateEmail(value));
    }

    if (name === "password") {
      setIsValidPassword(validatePassword(value));
    }
  };

  useEffect(() => {
    setIsValidEmail(validateEmail(userInfo.email));
    setIsValidPassword(validatePassword(userInfo.password));
  }, [userInfo.email, userInfo.password]);

  return (
    <motion.div
      className="w-[35rem] h-[35rem] mx-auto bg-white shadow-xl rounded-md"
      initial={{ opacity: 0, y: 50 }} // 초기 상태
      animate={{ opacity: 1, y: 0 }} // 애니메이션 중 상태
      exit={{ opacity: 0, y: 50 }} // 종료 상태
      transition={{ duration: 0.5 }} // 애니메이션 지속 시간
    >
      <CardHeader>
        {/* <CardTitle>
          <Image src={ModalLogo} alt="logo" className="w-20rem mx-auto m-1" />
        </CardTitle> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <MdInfoOutline
                  style={{ color: "#FC8E3F", fontSize: "2rem" }}
                  className="w-7 ml-1 translate-x-1"
                />
              </div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="이름을 입력해 주세요."
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                value={userInfo.name}
                onChange={handleChange}
              />
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
            <div className="flex justify-center gap-2 input-field w-[30rem] h-14 items-center rounded-md m-1 mx-auto">
              <div className="border-r-2 border-gray-100 flex items-center mr-2">
                <Image src={lockImage} alt="lockImage" className="w-7 ml-2" />
              </div>
              <input
                id="rePassword"
                type="password"
                name="rePassword"
                placeholder="비밀번호를 다시 한번 입력해 주세요."
                className="input-text outline-none h-full border-gray-100 flex w-full bg-gray-100 rounded-md px-2 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                value={userInfo.rePassword}
                onChange={handleChange}
              />
            </div>
            <CardFooter className="flex flex-col justify-center items-center m-2 px-2">
              <button
                type="submit"
                style={{
                  backgroundColor: validateSubmit ? "#6536BF" : "#8949FF",
                  opacity: validateSubmit ? 0.4 : 1,
                }}
                className="loginButton rounded-lg w-full text-white py-4 flex justify-center items-center mt-20"
                disabled={validateSubmit}
              >
                {isLoading ? (
                  <MoonLoader color="#FFFFFF" size={20} />
                ) : (
                  "회원가입"
                )}
              </button>
            </CardFooter>
          </div>
        </form>
      </CardContent>
    </motion.div>
  );
}
