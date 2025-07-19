import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

export default function Button({ text, className }: ButtonProps) {
  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        className="absolute w-full h-full rounded-[100px] inline-flex justify-center items-center gap-2.5 bg-blue-600 hover:bg-blue-400"
      >
        <span className="justify-start text-white text-base font-bold font-['Inter']">
          {text}
        </span>
      </button>
    </div>
  );
}
