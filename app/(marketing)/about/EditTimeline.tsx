"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2023", event: "MyGiveAway platform launched" },
  { year: "2024", event: "Reached 10,000 users" },
  { year: "2025", event: "Integrated SkillLink partnership" },
];

export default function EditTimeline() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-pink-600 mb-8"
      >
        Our Journey
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.3 }}
            className="bg-white rounded-2xl shadow-md p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-pink-600">{m.year}</h3>
            <p className="text-gray-700">{m.event}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
