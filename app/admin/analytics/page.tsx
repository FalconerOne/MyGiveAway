import React, { useEffect, useState } from 'react';
import { Card, Toast } from '@/components/ui';
import { getAnalytics } from '@/supabase/analytics';

interface EventData {
  id: string;
  user_id: string;
  event: string;
  metadata: any;
}

const AdminAnalyticsPage: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    getAnalytics().then((data) => setEvents(data as EventData[]));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((e) => (
          <Card key={e.id}>
            <h2 className="font-semibold">Event: {e.event}</h2>
            <p>User ID: {e.user_id}</p>
            <p>Metadata: {JSON.stringify(e.metadata)}</p>
          </Card>
        ))}
      </div>
      <Toast
        title="Analytics Loaded"
        description={`${events.length} events fetched`}
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </div>
  );
};

export default AdminAnalyticsPage;
