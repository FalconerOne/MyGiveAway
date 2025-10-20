"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface AdZoneProps {
  zone: string;
}

interface Ad {
  id: string;
  image_url: string;
  link: string;
}

export default function AdZoneDisplay({ zone }: AdZoneProps) {
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

  if (ads.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {ads.map((ad) => (
        <a key={ad.id} href={ad.link} target="_blank" rel="noopener noreferrer">
          <img src={ad.image_url} alt={`Ad ${ad.id}`} className="rounded-lg shadow max-h-32" />
        </a>
      ))}
    </div>
  );
}
