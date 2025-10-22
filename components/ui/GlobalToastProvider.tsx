"use client";

import React, { useState } from "react";
import { Toast } from "@/components/ui/toast";

export default function GlobalToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children}
      <Toast
        title="Welcome!"
        description="Toast system initialized successfully."
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
