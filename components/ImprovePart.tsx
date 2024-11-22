"use client";

import { motion } from "framer-motion";
import { Input } from "./ui/input";
import React, { useState } from "react";

export const ImprovePart = () => {
  return (
    <>
      <div className="w-[42%] h-[90vh] flex flex-col border-0 border-gray-100">
        <div className="w-full h-[10vh] border-2 border-gray-100 flex justify-center items-center">
          <h1 className="flex items-center gap-2 areaAnalysis_black">
            과거 vs 현재 수치 비교
          </h1>
        </div>
        <div className="border-x-2 border-gray-100"></div>
      </div>
    </>
  );
};
