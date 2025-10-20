"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface LeaderboardEntry {
  id: string;
  username: string;
  points: number;
}

export default function LeaderboardEnhanced() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const { data } = await supabase
        .from("profiles")
        .select("id, username, points")
        .order("points", { ascending: false })
        .limit(10);

      if (data) setLeaderboard(data);
    }

    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl mx-auto">
      <h3 className="text-orange-600 font-bold text-xl mb-4 text-center">Top 10 Players</h3>
      <ul className="divide-y divide-gray-200">
        {leaderboard.map((user, index) => (
          <li key={user.id} className="flex justify-between py-2">
            <span>{index + 1}. {user.username}</span>
            <span className="font-semibold">{user.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
