"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-screen bg-slate-800 h-screen ">
      <div className="flex flex-col pt-[30vh] space-x-4">
        <span className="text-center text-8xl uppercase text-slate-50 text-bold tracking-tight">
          Chat with your book{" "}
        </span>
        <span className="text-center text-7xl uppercase">are you ready</span>
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={() => router.push("/signin")}
            className="text-slate-950 text-xl px-8 py-2 rounded-lg font-bold bg-slate-50 border-2 hover:shadow hover:shadow-white hover:text-slate-500 transition-all duration-300 delay-100 "
          >
            {`Let's Start >`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
