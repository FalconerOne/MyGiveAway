"use client";
import * as React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Switch({ checked, onChange }: SwitchProps) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-200 ${
        checked ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}
