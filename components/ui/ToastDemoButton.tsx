"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { triggerToast } from "@/components/ui/GlobalToastProvider";

const ToastDemoButton: React.FC = () => {
  const handleClick = () => {
    triggerToast({
      title: "Toast Working ✅",
      description: "This confirms your global toast system is fully active!",
    });
  };

  return (
    <div className="flex items-center justify-center py-10">
      <Button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        Test Toast Notification
      </Button>
    </div>
  );
};

export default ToastDemoButton;
