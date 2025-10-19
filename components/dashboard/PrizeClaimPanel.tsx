"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Prize {
  id: string;
  title: string;
  claimed: boolean;
}

interface Props {
  userId: string;
}

export default function PrizeClaimPanel({ userId }: Props) {
  const [prizes, setPrizes] = useState<Prize[]>([]);

  useEffect(() => {
    async function fetchPrizes() {
      const { data } = await supabase
        .from("prizes")
        .select("*")
        .eq("user_id", userId);
      if (data) setPrizes(data);
    }
    fetchPrizes();
  }, [userId]);

  async function claimPrize(prizeId: string) {
    await supabase.from("prizes").update({ claimed: true }).eq("id", prizeId);
    setPrizes((prev) =>
      prev.map((p) => (p.id === prizeId ? { ...p, claimed: true } : p))
    );
  }

  return (
    <div className="w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prizes.map((prize) => (
        <div key={prize.id} className="bg-white shadow rounded p-4 text-center">
          <h4 className="font-bold text-orange-600 mb-2">{prize.title}</h4>
          <button
            disabled={prize.claimed}
            onClick={() => claimPrize(prize.id)}
            className={`px-4 py-2 rounded-full font-medium ${
              prize.claimed ? "bg-gray-300 text-gray-700" : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {prize.claimed ? "Claimed" : "Claim Prize"}
          </button>
        </div>
      ))}
    </div>
  );
}
