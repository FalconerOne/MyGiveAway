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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchLeaderboard() {
      const user = supabase.auth.user();
      if (!user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setIsAdmin(profile?.role === "admin");

      const { data } = await supabase
        .from("profiles")
        .select("id, username, points")
        .order("points", { ascending: false })
        .limit(isAdmin ? 100 : 60);

      if (data) setUsers(data as LeaderboardUser[]);
    }

    fetchLeaderboard();
  }, [isAdmin]);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl">
      <h3 className="text-orange-600 font-bold text-xl mb-4">Leaderboard</h3>
      <ul className="divide-y divide-gray-200">
        {users.map((u, index) => (
          <li key={u.id} className="flex justify-between p-2">
            <span>
              {index + 1}. {u.username}
            </span>
            <span className="font-semibold">{u.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
