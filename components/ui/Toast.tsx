"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export interface ToastProps {
  title: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  open,
  onOpenChange,
  duration = 4000,
}) => (
  <ToastPrimitive.Provider swipeDirection="right" duration={duration}>
    <ToastPrimitive.Root
      open={open}
      onOpenChange={onOpenChange}
      className={cn(
        "bg-gray-900 text-white rounded-xl px-4 py-3 shadow-lg data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut"
      )}
    >
      <ToastPrimitive.Title className="font-semibold text-sm">
        {title}
      </ToastPrimitive.Title>
      {description && (
        <ToastPrimitive.Description className="text-xs opacity-80 mt-1">
          {description}
        </ToastPrimitive.Description>
      )}
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport className="fixed bottom-5 right-5 flex flex-col gap-2 z-50" />
  </ToastPrimitive.Provider>
);
