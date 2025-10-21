import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui';
import { getAnalytics } from '@/supabase/analytics';

const SupervisorDashboardPage: React.FC = () => {
  const [analyticsCount, setAnalyticsCount] = useState(0);

  useEffect(() => {
    getAnalytics().then((data) => setAnalyticsCount(data.length));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Supervisor Dashboard</h1>
      <Card>
        <h2 className="font-semibold">Total Analytics Events</h2>
        <p className="text-xl">{analyticsCount}</p>
      </Card>
    </div>
  );
};

export default SupervisorDashboardPage;
