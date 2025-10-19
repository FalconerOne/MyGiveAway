"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MyGiveAwayBanner() {
  return (
    <motion.div
      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-4 px-3 rounded-2xl shadow-lg mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl sm:text-2xl font-semibold">
        🎉 Join, Win, and Track GiveAways that Delight You & Support Charity!
      </h2>
      <p className="text-sm mt-2 opacity-90">
        Participate now, share with friends, and make every entry count for a cause.
      </p>
      <div className="mt-4">
        <Link
          href="/giveaways"
          className="bg-white text-pink-600 font-semibold py-2 px-5 rounded-full shadow hover:bg-pink-50 transition"
        >
          Explore GiveAways
        </Link>
      </div>
    </motion.div>
  );
}
