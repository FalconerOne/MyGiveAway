"use client";

import { motion } from "framer-motion";

export default function EditMission() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          At <span className="font-semibold text-pink-600">MyGiveAway</span>, our mission is to make
          generosity engaging. We believe that giving and receiving can be fun,
          transparent, and socially meaningful. Through gamified giveaways,
          real-time engagement, and charitable integrations, we help both
          brands and individuals spread joy and make an impact.
        </motion.p>
      </div>
    </div>
  );
}
