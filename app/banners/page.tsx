"use client";

import { motion } from "framer-motion";
import AdZoneDisplay from "@/components/ads/AdZoneDisplay";
import SkillLinkBanner from "@/components/global/SkillLinkBanner";

export default function BannersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          Featured <span className="text-orange-600">Banners</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          Discover our top rotating banners, campaigns, and promotions.
        </motion.p>
      </div>

      {/* 🌐 High-Priority: SkillLink Banner */}
      <SkillLinkBanner />

      {/* 🧩 Top Ad Zone */}
      <div className="w-full max-w-4xl mx-auto my-10">
        <AdZoneDisplay zone="banners-top" />
      </div>

      {/* 🧩 Bottom Ad Zone */}
      <div className="w-full max-w-4xl mx-auto mt-10">
        <AdZoneDisplay zone="banners-bottom" />
      </div>
    </main>
  );
}
