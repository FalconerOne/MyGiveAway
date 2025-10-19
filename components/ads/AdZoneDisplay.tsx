"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AdZoneProps {
  zone?: "landing-mid" | "landing-bottom" | "sidebar" | "dashboard";
}

interface BannerItem {
  id: number;
  text: string;
  link: string;
  bg?: string;
}

const allBanners: BannerItem[] = [
  // 🌍 SkillLink Africa promos
  {
    id: 1,
    text: "🎯 Got Skills? Turn them into Cash on SkillLink Africa!",
    link: "https://skilllinkafrica.ng",
    bg: "bg-gradient-to-r from-orange-100 to-yellow-50",
  },
  {
    id: 2,
    text: "💼 Your hustle fit pay — Link up with real gigs on SkillLink Africa!",
    link: "https://skilllinkafrica.ng",
    bg: "bg-gradient-to-r from-yellow-50 to-orange-100",
  },
  {
    id: 3,
    text: "🚀 Don’t just wait for giveaways — start earning on SkillLink!",
    link: "https://skilllinkafrica.ng",
    bg: "bg-gradient-to-r from-orange-50 to-yellow-100",
  },
  {
    id: 4,
    text: "💡 Show your talent, connect across Africa — SkillLink!",
    link: "https://skilllinkafrica.ng",
    bg: "bg-gradient-to-r from-yellow-100 to-orange-50",
  },
  {
    id: 5,
    text: "🔥 From Lagos to Nairobi — Get paid for your skill on SkillLinkAfrica.ng!",
    link: "https://skilllinkafrica.ng",
    bg: "bg-gradient-to-r from-orange-50 to-yellow-100",
  },
  // 🏆 MyGiveAway internal promos
  {
    id: 6,
    text: "🎁 Join weekly Giveaways — Win cash, gadgets & airtime!",
    link: "/register",
    bg: "bg-gradient-to-r from-orange-50 to-white",
  },
  {
    id: 7,
    text: "❤️ Every entry supports charity — Be part of something bigger!",
    link: "/about",
    bg: "bg-gradient-to-r from-yellow-50 to-white",
  },
];

export default function AdZoneDisplay({ zone = "landing-mid" }: AdZoneProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allBanners.length);
    }, 7000); // change every 7 seconds
    return () => clearInterval(timer);
  }, []);

  const banner = allBanners[index];

  return (
    <motion.div
      key={banner.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${banner.bg} rounded-2xl shadow-md py-5 px-6 text-center cursor-pointer`}
    >
      <Link href={banner.link} target={banner.link.startsWith("http") ? "_blank" : "_self"}>
        <span className="text-lg md:text-xl font-semibold text-orange-700 hover:text-orange-900 transition">
          {banner.text}
        </span>
      </Link>
    </motion.div>
  );
}
