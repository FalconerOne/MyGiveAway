"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

export default function AdminTrueCounts() {
  const [users, setUsers] = useState<number>(0);
  const [giveaways, setGiveaways] = useState<number>(0);

  useEffect(() => {
    async function fetchCounts() {
      const { count: userCount } = await supabase.from("profiles").select("*", { count: "exact" });
      const { count: giveawayCount } = await supabase.from("giveaways").select("*", { count: "exact" });

      setUsers(userCount || 0);
      setGiveaways(giveawayCount || 0);
    }
    fetchCounts();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow p-4 text-center"
      >
        <h4 className="text-orange-600 font-bold">Total Users</h4>
        <p className="text-3xl font-extrabold">{users}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow p-4 text-center"
      >
        <h4 className="text-orange-600 font-bold">Total Giveaways</h4>
        <p className="text-3xl font-extrabold">{giveaways}</p>
      </motion.div>
    </div>
  );
}
