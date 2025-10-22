"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Toast } from "@/components/ui/toast";

interface ToastContextProps {
  showToast: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const GlobalToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [toastData, setToastData] = useState<{ title: string; description?: string }>({
    title: "",
    description: "",
  });

  const showToast = (title: string, description?: string) => {
    setToastData({ title, description });
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        title={toastData.title}
        description={toastData.description}
        open={open}
        onOpenChange={setOpen}
      />
    </ToastContext.Provider>
  );
};

export const useGlobalToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useGlobalToast must be used within GlobalToastProvider");
  return context;
};
