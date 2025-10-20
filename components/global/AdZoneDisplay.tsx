"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Ad {
  id: string;
  image_url: string;
  link_url: string;
  priority: "high" | "medium" | "low";
}

interface Props {
  zone: string;
}

export default function AdZoneDisplay({ zone }: Props) {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    async function fetchAds() {
      const { data } = await supabase
        .from("ads")
        .select("*")
        .eq("zone", zone)
        .order("priority", { ascending: true });
      if (data) setAds(data);
    }
    fetchAds();
  }, [zone]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
      {ads.map((ad) => (
        <a
          key={ad.id}
          href={ad.link_url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg overflow-hidden shadow hover:scale-105 transition transform"
        >
          <img src={ad.image_url} alt={`Ad ${ad.id}`} className="w-full h-40 object-cover" />
        </a>
      ))}
    </div>
  );
}
