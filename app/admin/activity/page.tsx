"use client";
import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui';
import { supabase } from '@/config/supabase';

interface Activity {
  id: string;
  user_id: string;
  action: string;
  created_at: string;
}

const AdminActivityPage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    supabase.from('activity_log').select('*').order('created_at', { ascending: false }).then(({ data }) => {
      if (data) setActivities(data as Activity[]);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Activity Log</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {activities.map((a) => (
          <Card key={a.id}>
            <p><strong>User ID:</strong> {a.user_id}</p>
            <p><strong>Action:</strong> {a.action}</p>
            <p><strong>Date:</strong> {new Date(a.created_at).toLocaleString()}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminActivityPage;
