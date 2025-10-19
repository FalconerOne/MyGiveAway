"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

interface AdminCounts {
  totalUsers: number;
  totalPrizes: number;
  totalPoints: number;
}

export default function AdminTrueCounts() {
  const [counts, setCounts] = useState<AdminCounts>({
    totalUsers: 0,
    totalPrizes: 0,
    totalPoints: 0,
  });

  useEffect(() => {
    async function fetchCounts() {
      const [{ data: usersData }, { data: prizesData }, { data: pointsData }] =
        await Promise.all([
          supabase.from("users").select("*"),
          supabase.from("user_prizes").select("*"),
          supabase.from("user_points").select("*"),
        ]);
      setCounts({
        totalUsers: usersData?.length || 0,
        totalPrizes: prizesData?.length || 0,
        totalPoints: pointsData?.reduce((acc, p: any) => acc + p.points, 0) || 0,
      });
    }
    fetchCounts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-md flex justify-between gap-4"
    >
      <div>Total Users: {counts.totalUsers}</div>
      <div>Total Prizes: {counts.totalPrizes}</div>
      <div>Total Points: {counts.totalPoints}</div>
    </motion.div>
  );
}
