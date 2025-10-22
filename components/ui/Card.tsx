"use client";
import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white dark:bg-gray-900 rounded-xl shadow p-4 ${className}`}>{children}</div>;
}
