"use client";

import React from "react";

import NavLogo from "@/images/navLogo2.png";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/store";

const NavBar: React.FC = () => {
  const router = useRouter();
  const { loginSuccess, setLoginSuccess } = useAuthStore();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleLogout = () => {
    // 로그아웃 로직 작성
    setLoginSuccess();
    router.push("/");
  };

  return (
    <menu className="w-full h-[10vh] bg-white flex items-center border-b-2 border-gray-100 justify-between">
      <Image
        src={NavLogo}
        alt="NavLogo"
        className="ml-10 cursor-pointer w-[12rem]"
        onClick={handleLogoClick}
      />
      {/* 액세스 토큰이 있을 때만 보이게 설정 */}
      {loginSuccess && (
        <>
          <motion.button
            className="areaAnalysis10 px-6 py-2 mr-12 rounded-md border-2 border-violet-400"
            style={{ backgroundColor: "#FFFFFF" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
          >
            로그아웃
          </motion.button>
        </>
      )}
    </menu>
  );
};

export default NavBar;
