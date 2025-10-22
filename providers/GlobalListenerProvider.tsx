"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Toast } from "@/components/ui/toast";

interface GlobalToastContextProps {
  showToast: (title: string, description?: string) => void;
}

const GlobalToastContext = createContext<GlobalToastContextProps | undefined>(
  undefined
);

export const GlobalToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    description: "",
  });

  const showToast = useCallback((title: string, description?: string) => {
    setToastContent({ title, description: description || "" });
    setOpen(true);
  }, []);

  return (
    <GlobalToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        title={toastContent.title}
        description={toastContent.description}
        open={open}
        onOpenChange={setOpen}
      />
    </GlobalToastContext.Provider>
  );
};

export const useGlobalToast = (): GlobalToastContextProps => {
  const context = useContext(GlobalToastContext);
  if (!context) {
    throw new Error("useGlobalToast must be used within GlobalToastProvider");
  }
  return context;
};
