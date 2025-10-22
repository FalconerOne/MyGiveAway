"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/config/supabase";
import { getAnalytics } from "@/supabase/analytics";
import { Card } from "@/components/ui/card";
import { Toast } from "@/components/ui/toast";

interface AnalyticsData {
  id: string;
  event: string;
  user_id: string;
  metadata: any;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnalytics();
      setAnalytics(data as AnalyticsData[]);
      setToastOpen(true);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {analytics.map((item) => (
          <Card key={item.id}>
            <h2 className="font-semibold text-lg">{item.event}</h2>
            <p className="text-sm text-gray-500">User: {item.user_id}</p>
            <pre className="text-xs bg-gray-100 rounded-md p-2 mt-2">
              {JSON.stringify(item.metadata, null, 2)}
            </pre>
          </Card>
        ))}
      </div>

      <Toast
        title="Analytics Loaded"
        description={`${analytics.length} events fetched`}
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </div>
  );
}
