"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slogans = [
  "🎯 Got Skills? Turn them into Cash on SkillLink Africa!",
  "💼 Your hustle fit pay — Link up with real gigs on SkillLink Africa!",
  "🚀 Don’t just wait for giveaways — start earning on SkillLink!",
  "💡 Show your talent, connect across Africa — SkillLink!",
  "🔥 From Lagos to Nairobi — Get paid for your skill on SkillLinkAfrica.ng!",
];

export default function SkillLinkBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 6000); // change slogan every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400 text-white text-center py-3 px-2 rounded-2xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a
        href="https://skilllinkafrica.ng"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-base sm:text-lg font-semibold hover:underline transition"
      >
        {slogans[index]}
      </a>
    </motion.div>
  );
}
