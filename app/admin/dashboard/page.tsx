import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/config/supabase';
import { getAnalytics } from '@/supabase/analytics';
import { Card, Button, Toast } from '@/components/ui';

const AdminDashboardPage: React.FC = () => {
  const router = useRouter();
  const [userCount, setUserCount] = useState(0);
  const [analyticsCount, setAnalyticsCount] = useState(0);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    // Example: Fetch number of users
    supabase.from('users').select('id', { count: 'exact' }).then(({ count }) => {
      if (count) setUserCount(count);
    });

    getAnalytics().then((data) => {
      setAnalyticsCount(data.length);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h2 className="font-semibold">Total Users</h2>
          <p className="text-xl">{userCount}</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Total Analytics Events</h2>
          <p className="text-xl">{analyticsCount}</p>
        </Card>
      </div>
      <Button
        variant="primary"
        className="mt-6"
        onClick={() => setToastOpen(true)}
      >
        Show Toast Example
      </Button>
      <Toast
        title="Hello Admin"
        description="This is a test toast notification"
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </div>
  );
};

export default AdminDashboardPage;
