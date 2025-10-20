"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  const cards = [
    { title: "Community", description: "Connecting people through exciting giveaways.", bg: "from-yellow-400 to-orange-500" },
    { title: "Mission", description: "Empower users while supporting charities and partners.", bg: "from-orange-400 to-pink-500" },
    { title: "Team", description: "Dedicated professionals making giveaways fun & safe.", bg: "from-pink-400 to-orange-500" },
    { title: "Timeline", description: "Track our milestones and journey growth.", bg: "from-yellow-300 to-orange-400" },
  ];

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-8 text-center">About Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl shadow-lg p-6 text-white bg-gradient-to-r ${card.bg}`}
          >
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <Link href="/marketing/edit-mission" className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-orange-600 transition">
          Edit Mission
        </Link>
        <Link href="/marketing/edit-team" className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-orange-600 transition">
          Edit Team
        </Link>
        <Link href="/marketing/edit-timeline" className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-orange-600 transition">
          Edit Timeline
        </Link>
      </div>
    </main>
  );
}
