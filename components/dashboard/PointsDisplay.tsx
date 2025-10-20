"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

export default function PointsDisplay() {
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    async function fetchPoints() {
      const user = supabase.auth.user();
      if (!user) return;

      const { data } = await supabase
        .from("points")
        .select("total")
        .eq("user_id", user.id)
        .single();

      if (data?.total) setPoints(data.total);
    }
    fetchPoints();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-sm text-center">
      <h3 className="text-orange-600 font-bold text-xl mb-2">Your Points</h3>
      <motion.p
        key={points}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-extrabold text-gray-800"
      >
        {points}
      </motion.p>
    </div>
  );
}
