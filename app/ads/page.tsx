"use client";

import { motion } from "framer-motion";
import AdZoneDisplay from "@/components/ads/adZoneDisplay";
import SkillLinkBanner from "@/components/global/skillLinkBanner";

export default function AdsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Advertise with <span className="text-pink-600">MyGiveAway</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          Reach thousands of engaged participants with dynamic ad placements across our platform.
        </motion.p>
      </div>

      {/* 🧩 Top Ad Zone */}
      <div className="w-full max-w-4xl mx-auto mb-10">
        <AdZoneDisplay zone="ads-top" />
      </div>

      {/* 🌐 SkillLink Banner (Medium-Priority) */}
      <SkillLinkBanner />

      {/* 🧩 Bottom Ad Zone */}
      <div className="w-full max-w-4xl mx-auto mt-10">
        <AdZoneDisplay zone="ads-bottom" />
      </div>
    </main>
  );
}
