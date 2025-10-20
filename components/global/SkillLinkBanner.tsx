"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Banner {
  id: string;
  message: string;
  link: string;
}

export default function SkillLinkBanner() {
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    async function fetchBanner() {
      const { data } = await supabase
        .from("skilllink_banners")
        .select("*")
        .eq("active", true)
        .limit(1)
        .single();
      if (data) setBanner(data);
    }
    fetchBanner();
  }, []);

  if (!banner) return null;

  return (
    <a
      href={banner.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 rounded-xl shadow mb-8 inline-block text-center hover:opacity-90 transition"
    >
      {banner.message}
    </a>
  );
}
