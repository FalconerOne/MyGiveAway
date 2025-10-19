"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Activity {
  id: string;
  message: string;
  created_at: string;
}

export default function RecentActivityList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const { data } = await supabase
        .from("activities")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);
      if (data) setActivities(data);
    }
    fetchActivities();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-3xl">
      <h3 className="text-orange-600 font-bold text-xl mb-4">Recent Activity</h3>
      <ul>
        {activities.map((act) => (
          <li key={act.id} className="border-b border-gray-200 py-2">
            <span className="text-gray-700">{act.message}</span>
            <span className="text-gray-400 text-xs ml-2">{new Date(act.created_at).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
