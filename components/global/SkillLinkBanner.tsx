"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const banners = [
  "🎯 Got Skills? Turn them into Cash on SkillLink Africa!",
  "💼 Your hustle fit pay — Link up with real gigs on SkillLink Africa!",
  "🚀 Don’t just wait for giveaways — start earning on SkillLink!",
  "💡 Show your talent, connect across Africa — SkillLink!",
  "🔥 From Lagos to Nairobi — Get paid for your skill on SkillLinkAfrica.ng!",
];

export default function SkillLinkBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="bg-orange-100 text-orange-700 font-semibold rounded-lg py-3 px-4 shadow-md mb-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {banners[current]}
    </motion.div>
  );
}
