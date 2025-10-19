// app/(main)/about/layout.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-gray-50 to-white text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section className="w-full max-w-5xl p-6 md:p-12">
        {children}
      </section>
    </motion.main>
  );
}
