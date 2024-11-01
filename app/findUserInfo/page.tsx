"use client";

import NavBar from "@/components/NavBar";
import React from "react";
import { FindUserForm } from "@/components/FindUserForm";

const FindUserInfoPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[90vh] background flex items-center">
        <FindUserForm />
      </div>
    </>
  );
};

export default FindUserInfoPage;
