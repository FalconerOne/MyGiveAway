"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Activity {
  id: string;
  description: string;
  created_at: string;
}

export default function RecentActivityList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const { data } = await supabase
        .from("activities")
        .select("id, description, created_at")
        .order("created_at", { ascending: false })
        .limit(10);

      if (data) setActivities(data as Activity[]);
    }

    fetchActivities();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl">
      <h3 className="text-orange-600 font-bold text-xl mb-4">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.length === 0 && <p className="text-gray-500">No recent activity.</p>}
        {activities.map((act) => (
          <li key={act.id} className="py-2 text-gray-800">
            {act.description} <span className="text-gray-400 text-sm">({new Date(act.created_at).toLocaleString()})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
