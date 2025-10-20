"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

interface LeaderboardEntry {
  username: string;
  points: number;
}

export default function LeaderboardEnhanced() {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const { data } = await supabase
        .from("points")
        .select("user_id, total, profiles(username)")
        .order("total", { ascending: false })
        .limit(10);

      if (data) {
        const formatted = data.map((item: any) => ({
          username: item.profiles?.username || "Unknown",
          points: item.total || 0,
        }));
        setLeaders(formatted);
      }
    }
    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-lg mx-auto">
      <h3 className="text-orange-600 font-bold text-xl mb-4 text-center">Top Players</h3>
      <ul>
        {leaders.map((user, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex justify-between py-2 border-b border-gray-100"
          >
            <span>{i + 1}. {user.username}</span>
            <span className="font-bold">{user.points}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
