"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Counts {
  totalUsers: number;
  activeGiveaways: number;
  totalPrizes: number;
}

export default function AdminTrueCounts() {
  const [counts, setCounts] = useState<Counts>({
    totalUsers: 0,
    activeGiveaways: 0,
    totalPrizes: 0,
  });

  useEffect(() => {
    async function fetchCounts() {
      const [{ count: users }, { count: giveaways }, { count: prizes }] =
        await Promise.all([
          supabase.from("profiles").select("*", { count: "exact" }),
          supabase.from("giveaways").select("*", { count: "exact" }).eq("status", "active"),
          supabase.from("prizes").select("*", { count: "exact" }),
        ]);
      setCounts({
        totalUsers: users || 0,
        activeGiveaways: giveaways || 0,
        totalPrizes: prizes || 0,
      });
    }
    fetchCounts();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-3xl grid grid-cols-3 text-center mb-6">
      <div>
        <h4 className="text-orange-600 font-bold">Users</h4>
        <p className="text-2xl font-semibold">{counts.totalUsers}</p>
      </div>
      <div>
        <h4 className="text-orange-600 font-bold">Active Giveaways</h4>
        <p className="text-2xl font-semibold">{counts.activeGiveaways}</p>
      </div>
      <div>
        <h4 className="text-orange-600 font-bold">Prizes</h4>
        <p className="text-2xl font-semibold">{counts.totalPrizes}</p>
      </div>
    </div>
  );
}
