"use client";

import NavBar from "@/components/NavBar";
import React from "react";
import { SignUpForm } from "@/components/SignUpForm";

const signUpPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-[90vh] background flex items-center">
        <SignUpForm />
      </div>
    </>
  );
};

export default signUpPage;
