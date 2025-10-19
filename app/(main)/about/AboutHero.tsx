// components/about/AboutHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <motion.section
      className="flex flex-col items-center text-center py-16 px-6 md:px-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl shadow-sm"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        About <span className="text-blue-600">MyGiveAway</span>
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 mb-8">
        We connect generosity with opportunity — enabling giveaways that
        delight participants and support real causes. Every campaign inspires
        joy, transparency, and community impact.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md cursor-pointer font-semibold"
      >
        Learn More
      </motion.div>
    </motion.section>
  );
}
