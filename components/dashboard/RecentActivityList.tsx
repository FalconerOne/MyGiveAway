"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { motion } from "framer-motion";

interface Activity {
  id: string;
  user: string;
  action: string;
  created_at: string;
}

export default function RecentActivityList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const { data, error } = await supabase
        .from("activity_log")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      if (!error && data) setActivities(data);
    }
    fetchActivities();
  }, []);

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <ul className="space-y-2 text-gray-700">
        {activities.length ? (
          activities.map((a) => (
            <li key={a.id}>
              <span className="font-semibold">{a.user}</span> {a.action}{" "}
              <span className="text-sm text-gray-400">
                {new Date(a.created_at).toLocaleString()}
              </span>
            </li>
          ))
        ) : (
          <li>No recent activity</li>
        )}
      </ul>
    </motion.div>
  );
}
