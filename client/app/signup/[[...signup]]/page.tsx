import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-slate-800 w-screen h-screen">
        <SignUp />
      </div>
    </>
  );
};

export default page;
