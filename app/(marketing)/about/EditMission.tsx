"use client";

import { motion } from "framer-motion";

export default function EditMission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-pink-600 mb-6"
      >
        Our Mission
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-700 max-w-3xl mx-auto"
      >
        At MyGiveAway, our mission is to create a fun and engaging platform where
        participants can win amazing prizes while supporting charitable causes.
        We strive to build transparency, fairness, and community-driven experiences.
      </motion.p>
    </div>
  );
}
