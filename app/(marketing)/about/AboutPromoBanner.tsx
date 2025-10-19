"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const promos = [
  {
    id: 1,
    text: "🎉 Win and Give Back — Every Giveaway Supports a Cause!",
    link: "/giveaways",
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 2,
    text: "💼 Got Skills? Turn them into Cash on SkillLink Africa!",
    link: "https://skilllinkafrica.ng",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    text: "🚀 Be a Hero — Join the Heart Heroes Campaign on MyGiveAway!",
    link: "/campaigns/heart-heroes",
    color: "from-pink-400 to-red-500",
  },
  {
    id: 4,
    text: "🌍 Connect. Win. Empower — MyGiveAway x SkillLink Africa.",
    link: "https://skilllinkafrica.ng",
    color: "from-blue-400 to-purple-500",
  },
];

export default function AboutPromoBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = promos[index];

  return (
    <div className="w-full overflow-hidden py-3 bg-gradient-to-r text-white text-center font-semibold shadow-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className={`bg-gradient-to-r ${current.color} py-3`}
        >
          <Link href={current.link} target={current.link.startsWith("http") ? "_blank" : "_self"}>
            <span className="cursor-pointer hover:underline">{current.text}</span>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
