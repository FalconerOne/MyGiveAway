"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function PointsDisplay() {
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    async function fetchPoints() {
      const user = supabase.auth.user();
      if (!user) return;

      const { data } = await supabase
        .from("points")
        .select("total_points")
        .eq("user_id", user.id)
        .single();

      if (data?.total_points) setPoints(data.total_points);
    }
    fetchPoints();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm text-center">
      <h3 className="text-orange-600 font-bold text-xl mb-2">Your Points</h3>
      <p className="text-3xl font-extrabold text-gray-800">{points}</p>
    </div>
  );
}
