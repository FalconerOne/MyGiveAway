"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/config/supabase';
import { Card, Button, Select, Toast } from '@/components/ui';

interface Giveaway {
  id: string;
  name: string;
  status: string;
}

const AdminGiveawaysPage: React.FC = () => {
  const router = useRouter();
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    supabase.from('giveaways').select('*').then(({ data }) => {
      if (data) setGiveaways(data as Giveaway[]);
    });
  }, []);

  const filtered = filterStatus
    ? giveaways.filter((g) => g.status === filterStatus)
    : giveaways;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Giveaways</h1>
      <div className="mb-4 w-64">
        <Select
          value={filterStatus}
          onValueChange={setFilterStatus}
          placeholder="Filter by Status"
          options={[
            { value: '', label: 'All' },
            { value: 'active', label: 'Active' },
            { value: 'completed', label: 'Completed' },
          ]}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((g) => (
          <Card key={g.id}>
            <h2 className="font-semibold">{g.name}</h2>
            <p>Status: {g.status}</p>
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => setToastOpen(true)}
            >
              Notify Winner
            </Button>
          </Card>
        ))}
      </div>
      <Toast
        title="Winner Notification"
        description="This is a placeholder toast for winner announcement"
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </div>
  );
};

export default AdminGiveawaysPage;
