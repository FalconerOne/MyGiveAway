"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 4000); // rotates every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-16 mb-10">
      <motion.div
        className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-lg text-white text-center py-6 cursor-pointer hover:scale-[1.02] transition"
        onClick={() => window.open("https://www.skilllinkafrica.ng", "_blank")}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl font-medium"
          >
            {slogans[index]}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
