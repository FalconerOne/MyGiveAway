"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Banner {
  id: string;
  image_url: string;
  link: string;
  slogan: string;
}

export default function SkillLinkBanner() {
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    async function fetchBanner() {
      const { data } = await supabase
        .from("skilllink_banners")
        .select("*")
        .order("priority", { ascending: true })
        .limit(1)
        .single();

      if (data) setBanner(data);
    }
    fetchBanner();
  }, []);

  if (!banner) return null;

  return (
    <a href={banner.link} target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 text-center">
        <p className="text-lg md:text-xl font-bold">{banner.slogan}</p>
        <img
          src={banner.image_url}
          alt="SkillLink Banner"
          className="mx-auto mt-2 max-h-24 object-contain"
        />
      </div>
    </a>
  );
}
