"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Activity {
  id: string;
  user_name: string;
  action: string;
  created_at: string;
}

export default function RecentActivityList() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchActivities() {
      const { data } = await supabase
        .from("activity_log")
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
      <ul className="space-y-2">
        {activities.map((act) => (
          <li key={act.id} className="text-gray-700">
            <span className="font-semibold">{act.user_name}</span> {act.action} –{" "}
            <span className="text-gray-500 text-sm">{new Date(act.created_at).toLocaleString()}</span>
          </li>
        ))}
        {activities.length === 0 && <li className="text-gray-400">No recent activity.</li>}
      </ul>
    </div>
  );
}
