// import backImg from "@/images/backImage.png";
"use client";

import NavBar from "@/components/NavBar";
import { CardForm } from "@/components/CardForm";

import { useAuth } from "@/api/useAuth";

export default function Home() {
  const { login, logout } = useAuth();

  return (
    <>
      <NavBar />
      <div className="w-full h-[90vh] background flex items-center">
        <CardForm />
      </div>
    </>
  );
}
