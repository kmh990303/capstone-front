"use client";

import React from "react";

import NavLogo from "@/images/navLogo2.png";

import Image from "next/image";

import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <menu className="w-full h-[10vh] bg-white flex items-center">
      <Image
        src={NavLogo}
        alt="NavLogo"
        className="ml-10 cursor-pointer w-[12rem]"
        onClick={handleLogoClick}
      />
    </menu>
  );
};

export default NavBar;
