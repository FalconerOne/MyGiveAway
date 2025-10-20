"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Prize {
  id: string;
  name: string;
  claimed: boolean;
}

export default function PrizeClaimPanel() {
  const [prizes, setPrizes] = useState<Prize[]>([]);

  useEffect(() => {
    async function fetchPrizes() {
      const user = supabase.auth.user();
      if (!user) return;

      const { data } = await supabase
        .from("prizes")
        .select("id, name, claimed")
        .eq("user_id", user.id);

      if (data) setPrizes(data as Prize[]);
    }

    fetchPrizes();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-lg">
      <h3 className="text-orange-600 font-bold text-xl mb-4">Your Prizes</h3>
      {prizes.length === 0 ? (
        <p className="text-gray-500">No prizes available yet.</p>
      ) : (
        <ul className="space-y-2">
          {prizes.map((prize) => (
            <li
              key={prize.id}
              className={`p-3 rounded-lg ${
                prize.claimed ? "bg-gray-100 text-gray-400" : "bg-orange-50 text-gray-800"
              } shadow`}
            >
              {prize.name} {prize.claimed ? "(Claimed)" : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
