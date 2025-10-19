"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface LeaderboardUser {
  id: string;
  username: string;
  points: number;
}

export default function LeaderboardEnhanced() {
  const [users, setUsers] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    async function fetchLeaderboard() {
      const { data } = await supabase
        .from("profiles")
        .select("id, username, points")
        .order("points", { ascending: false })
        .limit(60);
      if (data) setUsers(data);
    }
    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-3xl">
      <h3 className="text-orange-600 font-bold text-xl mb-4">Leaderboard</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={user.id} className="flex justify-between py-1 border-b border-gray-200">
            <span>{idx + 1}. {user.username}</span>
            <span className="font-semibold">{user.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
