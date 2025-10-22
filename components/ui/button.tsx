"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
