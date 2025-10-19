"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

interface LeaderboardUser {
  id: string;
  name: string;
  points: number;
}

export default function LeaderboardEnhanced() {
  const [leaders, setLeaders] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const { data, error } = await supabase
        .from("user_points")
        .select("user_id, points, users(name)")
        .order("points", { ascending: false })
        .limit(10)
        .eq("users.is_active", true)
        .returns<LeaderboardUser[]>();
      if (!error && data) setLeaders(data);
    }
    fetchLeaderboard();
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-4">Top Players</h3>
      <ul className="space-y-2">
        {leaders.length ? (
          leaders.map((user, idx) => (
            <li key={user.id} className="flex justify-between">
              <span>
                #{idx + 1} {user.name}
              </span>
              <span>{user.points} pts</span>
            </li>
          ))
        ) : (
          <li>No leaderboard data</li>
        )}
      </ul>
    </motion.div>
  );
}
