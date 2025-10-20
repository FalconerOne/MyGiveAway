"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const banners = [
  "🎯 Got Skills? Turn them into Cash on SkillLink Africa!",
  "💼 Your hustle fit pay — Link up with real gigs on SkillLink Africa!",
  "🚀 Don’t just wait for giveaways — start earning on SkillLink!",
  "💡 Show your talent, connect across Africa — SkillLink!",
  "🔥 From Lagos to Nairobi — Get paid for your skill on SkillLinkAfrica.ng!"
];

export default function SkillLinkBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-orange-100 rounded-xl shadow p-4 w-full max-w-4xl mx-auto my-6 text-center text-orange-700 font-semibold">
      <Link href="https://SkillLinkAfrica.ng" target="_blank" className="hover:underline">
        {banners[index]}
      </Link>
    </div>
  );
}
