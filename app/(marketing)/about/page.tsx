"use client";

import { motion } from "framer-motion";
import EditMission from "./EditMission";
import EditTeam from "./EditTeam";
import EditTimeline from "./EditTimeline";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800">
      {/* 🏁 Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-orange-600 mb-4"
        >
          About <span className="text-orange-500">MyGiveAway</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-700 text-lg"
        >
          Empowering communities through fun, fairness, and rewards — powered by
          <span className="font-semibold text-orange-600"> Solarize Solutions Nig. Ltd</span>.
        </motion.p>
      </section>

      {/* 🌍 Mission Section */}
      <EditMission />

      {/* 👥 Team Section */}
      <EditTeam />

      {/* ⏳ Timeline Section */}
      <EditTimeline />

      {/* ✨ Footer note */}
      <footer className="py-12 text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} MyGiveAway. Built by <span className="text-orange-600 font-semibold">FalconerOne Technologies</span>.</p>
        <p className="mt-2">In partnership with <span className="text-orange-600 font-semibold">SkillLink Africa</span>.</p>
      </footer>
    </main>
  );
}

