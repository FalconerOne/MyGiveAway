"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      className="rounded-xl bg-white p-4 shadow"
    >
      {children}
    </motion.div>
  );
}
