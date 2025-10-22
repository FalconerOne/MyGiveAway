"use client";

import { Toaster, toast } from "react-hot-toast";
import { ReactNode, useEffect } from "react";

/**
 * GlobalToastProvider
 * Wraps the app with global toast notifications.
 * Supports both automatic event-based and manual trigger toasts.
 */
export default function GlobalToastProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Example global startup toast (can be modified or removed)
    console.log("✅ GlobalToastProvider initialized");
  }, []);

  return (
    <>
      {/* Main Application Content */}
      {children}

      {/* Toast Notification System */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          },
          success: {
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}

/**
 * Optional helper: call anywhere in the app to trigger a toast.
 * import { triggerToast } from "@/components/ui/GlobalToastProvider";
 */
export const triggerToast = (message: string, type: "success" | "error" | "info" = "info") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
};
