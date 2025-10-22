"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Toast } from "@/components/ui/toast";

interface ToastContextProps {
  showToast: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within GlobalToastProvider");
  return context;
};

export const GlobalToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ title: "", description: "" });

  const showToast = (title: string, description?: string) => {
    setMessage({ title, description: description || "" });
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        title={message.title}
        description={message.description}
        open={open}
        onOpenChange={setOpen}
      />
    </ToastContext.Provider>
  );
};
