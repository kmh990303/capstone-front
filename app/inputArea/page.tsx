// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { InputAreaForm } from "@/components/InputAreaForm";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full h-[90vh] background flex items-center">
        <InputAreaForm />
      </div>
    </>
  );
}
