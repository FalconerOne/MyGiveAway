"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const banners = [
  "/banners/skilllink-banner1.jpg",
  "/banners/skilllink-banner2.jpg"
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
    <div className="w-full max-w-4xl mx-auto mb-10 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={banners[current]}
        alt="SkillLink Banner"
        width={1200}
        height={300}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
