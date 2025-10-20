"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AdminTrueCounts() {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalGiveaways, setTotalGiveaways] = useState<number>(0);

  useEffect(() => {
    async function fetchCounts() {
      const { count: userCount } = await supabase
        .from("users")
        .select("*", { count: "exact" });

      const { count: giveawayCount } = await supabase
        .from("giveaways")
        .select("*", { count: "exact" });

      if (userCount) setTotalUsers(userCount);
      if (giveawayCount) setTotalGiveaways(giveawayCount);
    }
    fetchCounts();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm text-center">
      <h3 className="text-orange-600 font-bold text-xl mb-2">Admin Counts</h3>
      <p className="text-gray-800 text-lg">Total Users: {totalUsers}</p>
      <p className="text-gray-800 text-lg">Total Giveaways: {totalGiveaways}</p>
    </div>
  );
}
