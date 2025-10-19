"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2023", text: "MyGiveAway idea was born — a dream to blend charity, fairness, and fun." },
  { year: "2024", text: "Beta launch and first 5,000 verified participants." },
  { year: "2025", text: "Global Winner Celebration system goes live + integration with SkillLink Africa." },
  { year: "2026+", text: "Next-gen AI-powered giveaway personalization and cross-platform expansion." },
];

export default function EditTimeline() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-orange-600 text-center mb-10"
      >
        Our Journey
      </motion.h2>

      <div className="relative border-l-4 border-orange-400 ml-6 space-y-10">
        {milestones.map((m, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="pl-6 relative"
          >
            <span className="absolute -left-3 top-1.5 w-5 h-5 bg-orange-500 rounded-full border-2 border-white"></span>
            <h3 className="text-xl font-bold text-orange-700">{m.year}</h3>
            <p className="text-gray-700">{m.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

