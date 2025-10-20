"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminTrueCounts() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    async function fetchCounts() {
      const user = supabase.auth.user();
      if (!user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role !== "admin") return;

      const { data } = await supabase.from("giveaways").select("id");
      setCounts({ totalGiveaways: data?.length || 0 });
    }

    fetchCounts();
  }, []);

  if (!counts.totalGiveaways) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm text-center">
      <h3 className="text-orange-600 font-bold text-xl mb-2">Admin Stats</h3>
      <p className="text-3xl font-extrabold text-gray-800">
        Total Giveaways: {counts.totalGiveaways}
      </p>
    </div>
  );
}
