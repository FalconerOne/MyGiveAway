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
        .select("*")
        .order("created_at", { ascending: false })
        .limit(10);

      if (data) setActivities(data);
    }

    fetchActivities();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-2xl mx-auto">
      <h3 className="text-orange-600 font-bold mb-4 text-center">Recent Activity</h3>
      <ul className="divide-y divide-gray-200">
        {activities.map((act) => (
          <li key={act.id} className="py-2">
            <span className="text-gray-700">{act.description}</span>
            <span className="text-gray-400 text-sm block">{new Date(act.created_at).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
