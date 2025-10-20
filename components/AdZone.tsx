"use client";

import { useEffect, useState } from "react";

interface AdZoneDisplayProps {
  zone: "landing-mid" | "landing-bottom" | "dashboard-top" | "dashboard-bottom";
}

interface Ad {
  id: string;
  content: string;
}

export default function AdZoneDisplay({ zone }: AdZoneDisplayProps) {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    // Placeholder: Replace with dynamic fetch from Supabase or API
    const sampleAds: Record<string, Ad[]> = {
      "landing-mid": [{ id: "1", content: "🔥 Special Offer! Win more prizes now!" }],
      "landing-bottom": [{ id: "2", content: "🎁 Check out SkillLink Africa for gigs!" }],
      "dashboard-top": [{ id: "3", content: "🚀 Boost your points by referring friends!" }],
      "dashboard-bottom": [{ id: "4", content: "💡 Upgrade your account for extra rewards!" }]
    };
    setAds(sampleAds[zone] || []);
  }, [zone]);

  if (ads.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow p-4 w-full max-w-4xl mx-auto my-6 text-center">
      {ads.map((ad) => (
        <p key={ad.id} className="text-gray-800 font-medium">{ad.content}</p>
      ))}
    </div>
  );
}
