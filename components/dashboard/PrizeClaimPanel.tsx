"use client";

import { useEffect, useState } from "react";
import { Gift } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

interface Prize {
  id: string;
  title: string;
  claimed: boolean;
}

interface PrizeClaimPanelProps {
  userId: string;
}

export default function PrizeClaimPanel({ userId }: PrizeClaimPanelProps) {
  const [prizes, setPrizes] = useState<Prize[]>([]);

  useEffect(() => {
    async function fetchPrizes() {
      const { data, error } = await supabase
        .from("user_prizes")
        .select("*")
        .eq("user_id", userId);
      if (!error && data) setPrizes(data);
    }
    fetchPrizes();
  }, [userId]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3"
    >
      <div className="flex items-center gap-2 text-pink-500 font-semibold">
        <Gift size={24} /> Your Prizes
      </div>
      <ul className="text-gray-700">
        {prizes.length ? (
          prizes.map((p) => (
            <li key={p.id}>
              {p.title} {p.claimed ? "(Claimed ✅)" : "(Pending ⏳)"}
            </li>
          ))
        ) : (
          <li>No prizes yet</li>
        )}
      </ul>
    </motion.div>
  );
}
