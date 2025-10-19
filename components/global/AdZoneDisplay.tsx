"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AdZoneDisplayProps {
  zone: "landing-mid" | "landing-bottom" | "dashboard-top" | "dashboard-bottom";
}

interface Ad {
  id: string;
  content: string;
  priority: "high" | "medium" | "low";
}

const mockAds: Record<string, Ad[]> = {
  "landing-mid": [
    { id: "1", content: "🔥 Mid Landing Ad 1", priority: "high" },
    { id: "2", content: "💡 Mid Landing Ad 2", priority: "medium" },
  ],
  "landing-bottom": [
    { id: "3", content: "🎯 Bottom Landing Ad 1", priority: "medium" },
  ],
  "dashboard-top": [
    { id: "4", content: "🏆 Top Dashboard Ad", priority: "high" },
  ],
  "dashboard-bottom": [
    { id: "5", content: "📢 Bottom Dashboard Ad", priority: "medium" },
  ],
};

export default function AdZoneDisplay({ zone }: AdZoneDisplayProps) {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    setAds(mockAds[zone] || []);
  }, [zone]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl mx-auto">
      {ads.map((ad) => (
        <motion.div
          key={ad.id}
          className={`rounded-lg p-4 shadow-md ${
            ad.priority === "high"
              ? "bg-orange-400 text-white"
              : "bg-orange-100 text-orange-700"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {ad.content}
        </motion.div>
      ))}
    </div>
  );
}
