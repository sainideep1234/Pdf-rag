// app/components/Button.tsx or similar
import React, { MouseEventHandler } from "react";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: "400" });

const Button = ({
  text,
  onClick,
}: {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${inter.className} tracking-tighter text-slate-900 bg-gray-200 px-3 py-1 font-semibold rounded-sm hover:shadow transition-all duration-300 hover:text-slate-500 hover:shadow-slate-200`}
    >
      {text}
    </button>
  );
};

export default Button;
